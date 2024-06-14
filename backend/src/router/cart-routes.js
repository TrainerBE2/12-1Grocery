import express from 'express';
import { authentication } from '../middleware/auth-middleware.js';
import cartController from '../controller/cart-controller.js';
const router = express.Router();

router.get('/carts', authentication(["User"]), cartController.getCarts);
router.post('/carts', authentication(["User"]), cartController.createCart);
router.put('/carts/:cartId', authentication(["User"]), cartController.updateCart);
router.delete('/carts/:cartId', authentication(["User"]), cartController.deleteCart);


export default router