import express from 'express';
import reportController from '../controller/report-controller.js';
import { authentication } from '../middleware/auth-middleware.js';
const router = express.Router();

router.post('/report', authentication(["Super Admin"]), reportController.customReport);
router.get('/report/:period', authentication(["Super Admin"]), reportController.report);

export default router