import { ResponseError } from "../error/response-error.js";
import { verifyAccessToken } from "../utils/jwt.js";

const authentication = (requiredRoles = []) => {
    return (req, res, next) => {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            throw new ResponseError(401, "Unauthorized");
        }

        const user = verifyAccessToken(token);
        if (!user) {
            throw new ResponseError(401, "Unauthorized");
        }

        req.user = user;

        if (requiredRoles.length && !requiredRoles.some(role => user.role.includes(role))) {
            console.log(user);
            throw new ResponseError(403, `User role mismatch: required ${requiredRoles}, but got ${user.role}`);
        }

        next();
    };
};

export { authentication }
