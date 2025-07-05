import express from "express";
import { addApartment, deleteApartment, getApartments, updateApartment, getApartmentWithId } from "../controllers/apartment.controller.js";

const router = express.Router();

//add apartment
router.post('/',addApartment)
// get all apartment names
router.get('/', getApartments)
// get apartment by id
router.get('/:id', getApartmentWithId)
// update apartment details
router.put('/:id', updateApartment)
//delete apartment
router.delete('/:id', deleteApartment)



export default router;