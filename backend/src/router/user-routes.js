import express from 'express';
import { authentication } from '../middleware/auth-middleware.js';
import userController from '../controller/user-controller.js';
import { uploadUser } from '../middleware/upload-middleware.js';
const router = express.Router();

router.post('/users', authentication(["Super Admin"]), userController.createUser);
router.put('/users/:userId', authentication(["Super Admin"]), userController.updateUser);
router.put('/users/update-profile/:userId', authentication(["Super Admin", "Admin", "User"]), uploadUser.single('image'), userController.updateProfile);
router.delete('/users/:userId', authentication(["Super Admin"]), userController.deleteUser);
router.get('/users/:userId', authentication(["Super Admin"]), userController.getUser);
router.get('/users', authentication(["Super Admin"]), userController.getUsers);

router.post('/logout', authentication(["Super Admin", "Admin", "User"]), userController.logout);
router.post('/users/change-password', authentication(["Super Admin", "Admin", "User"]), userController.changePassword);

export default router