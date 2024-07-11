import express from 'express';
import { createOrder, getOrders, updateOrder } from '../Controllers/orderController.js';
import { verifyToken } from '../Middleware/verifyToken.js';

const router= express.Router();

router.post('/create-order',verifyToken, createOrder)
router.get('/get-order',verifyToken, getOrders)
router.put('/update-order/:id',updateOrder)

export default router; 