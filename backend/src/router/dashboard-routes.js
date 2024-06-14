import express from 'express';
import dashboardController from '../controller/dashboard-controller.js';
import { authentication } from '../middleware/auth-middleware.js';

const router = express.Router();

router.get('/dashboard/count-order', authentication(["Admin", "Super Admin"]), dashboardController.countOrder);
router.get('/dashboard/count-user', authentication(["Admin", "Super Admin"]), dashboardController.countUser);
router.get('/dashboard/count-product', authentication(["Admin", "Super Admin"]), dashboardController.countProduct);
router.get('/dashboard/total-price', authentication(["Admin", "Super Admin"]), dashboardController.getTotalPriceSum);
router.get('/dashboard/count-order-status', authentication(["Admin", "Super Admin"]), dashboardController.getOrderStatusCounts);
router.get('/dashboard/total-quantity-sold', authentication(["Admin", "Super Admin"]), dashboardController.getTotalQuantitySold);

export default router;