import express from "express";
import { addFlat, deleteFlat, getFlats, getFlatWithId, updateFlat } from "../controllers/flat.controller.js";

const router = express.Router();

//add Flat
router.post('/',addFlat)
// get all Flats
router.get('/', getFlats)
// get Flat by id
router.get('/:id', getFlatWithId)
// update Flat details
router.put('/:id', updateFlat)
//delete Flat
router.delete('/:id', deleteFlat)



export default router;