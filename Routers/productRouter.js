import express from 'express';
import { createProduct, deleteProduct, getProducts, updateProduct } from '../Controllers/productController.js';

const router=express.Router();

router.post('/create-product', createProduct)
router.get('/getProduct', getProducts)
router.put('/update-product/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct);

export default router;