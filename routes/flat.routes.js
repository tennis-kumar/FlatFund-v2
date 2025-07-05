import express from "express";
import { addFlat, deleteFlat, getFlats, getFlatWithId, updateFlat } from "../controllers/flat.controller.js";

const router = express.Router();

//add apartment
router.post('/',addFlat)
// get all apartment names
router.get('/', getFlats)
// get apartment by id
router.get('/:id', getFlatWithId)
// update apartment details
router.put('/:id', updateFlat)
//delete apartment
router.delete('/:id', deleteFlat)



export default router;