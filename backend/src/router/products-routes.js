import express from 'express';
import { authentication } from '../middleware/auth-middleware.js';
import productsController from '../controller/products-controller.js';
import { uploadProduct } from '../middleware/upload-middleware.js';
const router = express.Router();

router.post('/products', authentication(["Super Admin", "Admin"]), uploadProduct.single('image'), productsController.createProduct);
router.get('/products', authentication(["Super Admin", "Admin", "User"]), productsController.getProducts);
router.get('/products/category/:category', authentication(["Super Admin", "Admin", "User"]), productsController.getProductByCategory);
router.get('/products/:productId', authentication(["Super Admin", "Admin", "User"]), productsController.getProduct);
router.put('/products/:productId', authentication(["Super Admin", "Admin"]), uploadProduct.single('image'), productsController.updateProduct);
router.delete('/products/:productId', authentication(["Super Admin", "Admin"]), productsController.deleteProduct);



export default router