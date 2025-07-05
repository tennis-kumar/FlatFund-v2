import Flat from '../models/flat.model.js';

export const addFlat = async (req,res) => {
    try {
        const { flatNumber, floorNumber, apartmentId } = req.body;
        if(!flatNumber || !floorNumber || !apartmentId){
            return res.status(400).json({
                success: false,
                message: `flatNumber, floorNumber and apartmentId are required`
            });
        }
        const flat = new Flat({ flatNumber, floorNumber, apartmentId })
        const savedFlat = await flat.save();
        res.status(201).json({
            success: true,
            message: `Flat added successfully`,
            data: savedFlat
        });

    } catch (error) {
        console.error('Error creating Flat:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const getFlats =  async (req,res) => {
    try {
        const Flats = await Flat.find();

        res.status(200).json({
            success: true,
            message: `Flats fetched successfully`,
            data: Flats
        })
    } catch (error) {
        console.error('Error fetching Flats:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const getFlatWithId =  async (req,res) => {
    try {
        const {id} = req.params;
        // console.log(id);

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Flat ID is required',
            });
        }

        const flat = await Flat.findById(id);

        if(!flat){
            return res.status(404).json({
                success: false,
                message: `Flat not found`
            });
        }

        res.status(200).json({
            success: true,
            message: `Flat fetched successfully`,
            data: flat
        });
        
    } catch (error) {
        console.error('Error fetching Flat:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const updateFlat = async (req,res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Flat ID is required',
            });
        }
        const { flatNumber, floorNumber, apartmentId } = req.body;
        if(!flatNumber || !floorNumber || !apartmentId){
            return res.status(400).json({
                success: false,
                message: `flatNumber, floorNumber and apartmentId are required`
            });
        }
        
        const Flat = await Flat.findByIdAndUpdate(
            id,
            { flatNumber, floorNumber, apartmentId },
            { new: true, runValidators: true }
        )
        if(!Flat){
            return res.status(404).json({
                success: false,
                message: `Flat not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Flat updated successfully',
            data: Flat
        });
        
    } catch (error) {
        console.error('Error updating Flat:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const deleteFlat = async (req,res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Flat ID is required',
            });
        }
        const Flat = await Flat.findByIdAndDelete(id);

        if(!Flat){
            return res.status(404).json({
                success: false,
                message: `Flat not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Flat deleted successfully',
            data: Flat
        });
    } catch (error) {
        console.error('Error deleting Flat:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}
