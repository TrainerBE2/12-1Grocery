import express from 'express';
import { authentication } from '../middleware/auth-middleware.js';
import orderController from '../controller/order-controller.js';
const router = express.Router();


router.get('/orders/filter-status', authentication(["Super Admin", "Admin", "User"]), orderController.filterOrdersByStatus);
router.post('/orders/midtrans-web-hook', orderController.midtransWebhook);
router.post('/orders/cancel-transaction', authentication(["User"]), orderController.cancelTransaction);
router.post('/orders', authentication(["User"]), orderController.createOrder);
router.get('/orders', authentication(["Admin", "Super Admin", "User"]), orderController.getOrders);
router.get('/orders/:orderId', authentication(["Super Admin", "Admin", "User"]), orderController.getOrder);


export default router