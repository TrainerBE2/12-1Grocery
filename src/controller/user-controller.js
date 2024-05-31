import logger from "../utils/logging.js";
import { createUserValidation, forgotPasswordValidation, loginValidation, registerValidation, resetPasswordValidation, updateUserValidation } from "../validation/user-validation.js";
import { validate } from "../validation/validation.js";
import { ResponseError } from "../error/response-error.js";
import { compare, encript } from "../utils/bcrypt.js";
import { generateAccessToken } from "../utils/jwt.js";
import { sendMail, sendMailForgotPassword } from "../utils/sendMail.js";
import { v4 as tokenForgot } from 'uuid';
import { prisma } from "../utils/database.js";

const register = async (req, res, next) => {
    try {
        const userRegister = await validate(registerValidation, req.body);
        const userExists = await prisma.user.findFirst({
            where: { email: userRegister.email },
            select: {
                email: true,
                expireTime: true,
                isActive: true,
                name: true,
                no_telp: true
            }
        });

        if (userExists) {
            if (userExists.isActive) {
                throw new ResponseError(409, "Email has been registered and is active")
            } else if (!userExists.isActive && new Date(userExists.expireTime).getTime() > Date.now()) {
                throw new ResponseError(422, "Email has been registered and please check your email")
            } else {
                await prisma.user.delete({
                    where: { email: userRegister.email }
                })
            }
        }

        const password = await encript(userRegister.password)
        const result = await prisma.user.create({
            data: {
                email: userRegister.email,
                name: userRegister.name,
                password: password,
                no_telp: userRegister.no_telp,
                role: 'User',
                image: 'default.jpg',
                expireTime: new Date(Date.now() + (60000 * 60))
            },
            select: {
                id: true,
                email: true,
                name: true,
                no_telp: true,
                role: true,
                image: true,
                isActive: true,
                expireTime: true
            }
        })

        const email = await sendMail(result.name, result.email, result.id);
        if (!email) {
            throw new ResponseError(500, "Failed to send email");
        } else {
            logger.info("User created, please check your email");
            return res.status(201).json({
                message: "User created, please check your email",
                data: result
            })
        }
    } catch (error) {
        logger.error(error.message);
        logger.error(error.stack);
        next(error)
    }
}

const setActivateUser = async (req, res, next) => {
    try {
        const { email, userId } = req.params;

        const userActivateExists = await prisma.user.findFirst({
            where: {
                id: userId,
                email: email,
                isActive: false,
            }
        });

        if (!userActivateExists) {
            throw new ResponseError(404, 'User not found');
        } else {
            const userActivate = await prisma.user.update({
                where: {
                    id: userId,
                    email: email
                },
                data: {
                    isActive: true,
                    expireTime: null
                }
            })
            res.status(200).json({
                message: `User ${userActivate.email} Activated`,
                data: null
            });
            logger.info(`User ${userActivate.email} Activated`);
        }
    } catch (error) {
        logger.error(`Error in setActivateUser function: ${error.message}`);
        logger.error(error.stack);
        next(error);
    }
};


const login = async (req, res, next) => {
    try {
        const userLogin = await validate(loginValidation, req.body)
        const userExists = await prisma.user.findFirst({
            where: { email: userLogin.email },
            select: {
                id: true,
                email: true,
                password: true,
                name: true,
                no_telp: true,
                image: true,
                isActive: true
            }
        });

        if (!userExists) throw new ResponseError(401, "Email or Password Wrong");
        if (!userExists.isActive) throw new ResponseError(403, "User not active");
        const isPasswordValid = await compare(userLogin.password, userExists.password);
        if (!isPasswordValid) throw new ResponseError(401, "Email or Password Wrong");

        const user = {
            id: userExists.id,
            email: userExists.email,
            name: userExists.name,
            no_telp: userExists.no_telp,
            image: userExists.image,
        }

        const token = generateAccessToken(user);
        const result = await prisma.user.update({
            where: {
                id: userExists.id
            },
            data: {
                token: token
            },
            select: {
                token: true
            }
        })
        logger.info(`User logged in successfully: ${result.email}`);
        return res.status(200).json({
            message: `User logged in successfully: ${result.email}`,
            data: result
        });
    } catch (error) {
        logger.error(`Error in login function: ${error.message}`);
        logger.error(error.stack);
        next(error);
    }
}

const logout = async (req, res, next) => {
    try {
        const email = req.user.email;
        const result = await prisma.user.update({
            data: { token: null },
            where: { email: email },
        });
        res.status(200).json({
            message: `User logged out successfully: ${result.email}`,
            data: null
        })
        logger.info(`User logged out successfully: ${result.email}`);
    } catch (error) {
        logger.error(`Error in logout function: ${error.message}`);
        logger.error(error.stack);
        next(error)
    }
}

const forgotPassword = async (req, res, next) => {
    try {
        const userForgotPassword = await validate(forgotPasswordValidation, req.body);
        const userExists = await prisma.user.findFirst({
            where: { email: userForgotPassword.email },
            select: {
                email: true
            }
        });
        if (!userExists) throw new ResponseError(404, "Email not found");

        const tokenForget = tokenForgot();
        const emailForgot = await sendMailForgotPassword(userExists.name, userExists.email, tokenForget);
        if (!emailForgot) {
            throw new ResponseError(500, "Failed to send email");
        } else {
            const result = await prisma.user.update({
                where: { email: userExists.email },
                data: {
                    tokenReset: tokenForget
                },
                select: {
                    id: true,
                    email: true
                }
            });

            res.status(200).json({
                message: `Please check your email: ${result.email}`,
                data: null
            });
            logger.info(`Please check your email: ${result.email}`);
        }
    } catch (error) {
        logger.error(`Error in forgotPassword function: ${error.message}`);
        logger.error(error.stack);
        next(error);
    }
}

const validToken = async (req, res, next) => {
    try {
        const userExists = await prisma.user.findFirst({
            where: { tokenReset: req.params.token },
            select: {
                updatedAt: true
            }
        })

        if (!userExists) throw new ResponseError(404, "Invalid Token Reset Password");

        const currentTimestamp = new Date();
        const tokenTimestamp = new Date(userExists.updatedAt);
        const timeDifference = (currentTimestamp - tokenTimestamp) / 60000
        console.log(timeDifference);
        if (timeDifference > 30) throw new ResponseError(401, "Expired Token Reset Password");
        res.status(200).json({
            message: "token reset password valid",
            data: null
        })
        logger.info("Token forgot password Valid")
    } catch (error) {
        logger.error(`Error in validToken function: ${error.message}`);
        logger.error(error.stack);
        next(error)
    }
}

const resetPassword = async (req, res, next) => {
    try {
        const userExists = await prisma.user.findFirst({
            where: { tokenReset: req.params.token },
            select: { email: true }
        })
        if (!userExists) throw new ResponseError(404, "Token invalid or token expired");
        console.log(req.params.token);
        const resetPasswordUser = validate(resetPasswordValidation, req.body);
        const password = await encript(resetPasswordUser.newPassword)
        await prisma.user.update({
            where: {
                email: userExists.email
            },
            data: {
                tokenReset: null,
                password: password
            },
            select: { email: true }
        })

        res.status(200).json({
            message: "Thank you for resetting your password!",
            data: null
        });
        logger.info("Thank you for resetting your password!")
    } catch (error) {
        logger.error(`Error in reset password function: ${error.message}`);
        logger.error(error.stack)
        next(error)
    }
}


const createUser = async (req, res, next) => {
    try {
        const userCreate = await validate(createUserValidation, req.body);
        const userExist = await prisma.user.findFirst({
            where: {
                email: userCreate.email
            }
        });

        if (userExist) throw new ResponseError(400, 'Email already exsist');

        const result = await prisma.user.create({
            data: {
                ...userCreate,
                password: await encript('12345678'),
                image: 'default.jpg',
            }

        });

        res.status(201).json({
            message: "Created account user successfully",
            data: result
        });
        logger.info(`create account ${userCreate.name} successfuly`);
    } catch (error) {
        logger.error(`Error in create user function: ${error.message}`);
        logger.error(error.stack);
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            throw new ResponseError(404, "User not found");
        }

        const userUpdate = validate(updateUserValidation, req.body);

        if (req.file) {
            const filePath = `uploads/user/${user.image}`;
            if (user.image !== 'default.jpg') {
                fs.unlinkSync(filePath);
            }
            userUpdate.image = req.file.filename;
        }

        const result = await prisma.user.update({
            data: {
                ...userUpdate
            },

            where: {
                id: userId
            }
        });
        res.status(200).json({
            message: "user update successfully",
            data: result,
        });

        logger.info(`User ${result.name} updated successfuly`);
    } catch (error) {
        if (req.file) {
            const filePath = `uploads/user/${req.file.filename}`;
            fs.unlinkSync(filePath);
        }
        logger.error(`Error in update user function: ${error.message}`);
        logger.error(error.stack);
        next(error);
    }
};


const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.userId;
        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });
        if (!user || user.isActive == 0) {
            throw new ResponseError(404, "User not found");
        }

        await prisma.user.delete({
            where: {
                id: userId
            }
        });

        if (user.image && user.image !== 'default.jpg') {
            const userImagePath = `uploads/user/${user.image}`;
            fs.unlinkSync(userImagePath);
        }

        res.status(200).json({
            message: "User delete successfully",
            data: null
        });
        logger.info("User delete successfully");
    } catch (error) {
        logger.error(`Eror in delete user function: ${error.message}`);
        logger.error(error.stack);
        next(error);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const result = await prisma.user.findMany();

        if (result.length === 0) {
            throw new ResponseError(404, 'User not found');
        }

        res.status(200).json({
            message: "OK",
            data: result
        });
        logger.info("get users successfully");
    } catch (error) {
        next(error);
    }
};


const getUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const data = await prisma.user.findFirst({
            where: {
                id: userId
            }
        });

        if (!data) {
            throw new ResponseError(404, 'User is not found');
        }

        res.status(200).json({
            message: "OK",
            data: data
        });
        logger.info("get user successfully");
    } catch (error) {
        next(error);
    }
};

export default {
    register,
    setActivateUser,
    login,
    logout,
    forgotPassword,
    validToken,
    resetPassword,
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    getUser
}