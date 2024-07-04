import express from 'express';
import { createOrder, getOrders } from '../Controllers/orderController.js';

const router= express.Router();

router.post('/create-order', createOrder)
router.get('/get-order', getOrders)

export default router;