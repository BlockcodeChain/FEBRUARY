import express from 'express'
const router=express.Router();
import { Products ,login ,logout } from '../controller/product.controller.js';

router.post('/create', createProduct)
router.get('/all', getAllProduct)
router.get('/:id', getSingleProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)


export  default router;
