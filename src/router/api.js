import express from 'express';
import userController from '../controller/user-controller.js';
import { authentication } from '../middleware/auth-middleware.js';
import cartController from '../controller/cart-controller.js';
import { uploadProduct } from '../middleware/upload-middleware.js';
import productsController from '../controller/products-controller.js';
import orderController from '../controller/order-controller.js';
import ongkirController from '../controller/ongkir-controller.js';

const router = express.Router();


// Auth
router.post('/api-public/register', userController.register);
router.get('/api-public/set-activate/:email/:userId', userController.setActivateUser);
router.post('/api-public/login', userController.login);
router.post('/api-public/forgot-password', userController.forgotPassword);
router.get('/api-public/valid-token/:token', userController.validToken);
router.post('/api/logout', authentication, userController.logout);
router.patch('/api-public/reset-password/:token', userController.resetPassword);

// Cart
router.get('/api/carts', authentication, cartController.getCarts);
router.post('/api/carts', authentication, cartController.createCart);
router.put('/api/carts/:cartId', authentication, cartController.updateCart);
router.delete('/api/carts/:cartId', authentication, cartController.deleteCart);

// Products
router.post('/api/products', authentication, uploadProduct.single('image'), productsController.createProduct);
router.get('/api/products', authentication, productsController.getProducts);
router.get('/api/products/category/:category', authentication, productsController.getProductByCategory);
router.get('/api/products/:productId', authentication, productsController.getProduct);
router.put('/api/products/:productId', authentication, uploadProduct.single('image'), productsController.updateProduct);
router.delete('/api/products/:productId', authentication, productsController.deleteProduct);


// Order
router.get('/api/orders/filter-status', authentication, orderController.filterOrdersByStatus);
router.post('/api/orders', authentication, orderController.createOrder);
router.get('/api/orders', authentication, orderController.getOrders);
router.get('/api/orders/:orderId', authentication, orderController.getOrder);
router.post('/api/orders/midtrans-web-hook', orderController.midtransWebhook);
router.post('/api/orders/cancel-transaction', authentication, orderController.cancelTransaction);


// user
router.post('/api/users', authentication, userController.createUser);
router.put('/api/users/:userId', authentication, userController.updateUser);
router.delete('/api/users/:userId', authentication, userController.deleteUser);
router.get('/api/users/:userId', authentication, userController.getUser);
router.get('/api/users', authentication, userController.getUsers);


// Raja Ongkir
router.get('/api/province', ongkirController.province);
router.get('/api/city/:provinceId', ongkirController.city);
router.post('/api/cost', authentication, ongkirController.cost);

router.use((req, res, next) => {
    res.status(404).json({ errors: "Periksa lagi Endpoint nya mang salahan kayanya" })
})

export default router;