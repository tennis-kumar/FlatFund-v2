import express from "express";
import { addWaterBill, deleteWaterBill, getWaterBills, getWaterBillwithFlatId, updateWaterBill } from "../controllers/waterBill.controller.js";

const router = express.Router();

// add waterbill
router.post('/',addWaterBill);

// get all waterbills
router.get('/',getWaterBills);

// get water bills with flatId
router.get('/:id',getWaterBillwithFlatId);

//update water bill with billId
router.put('/:id',updateWaterBill);

// delete water bill with billId
router.delete('/:id',deleteWaterBill);

export default router;