import express from 'express';
import { createVendor, getVendors } from '../Controllers/vendorController.js';


const router= express.Router();

router.post('/create-vendor', createVendor)
router.get('/get-vendor', getVendors)


export default router;