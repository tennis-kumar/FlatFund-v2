import Apartment from '../models/apartment.model.js'

export const addApartment = async (req,res) => {
    try {
        const {name, address, totalFloors} = req.body;
        if(!name || !address || !totalFloors){
            return res.status(400).json({
                success: false,
                message: `Name, Address and Total Floors are required`
            });
        }
        const apartment = new Apartment({name, address, totalFloors})
        const savedApartment = await apartment.save();
        res.status(201).json({
            success: true,
            message: `Apartment added successfully`,
            data: savedApartment
        });

    } catch (error) {
        console.error('Error creating apartment:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const getApartments =  async (req,res) => {
    try {
        const apartments = await Apartment.find();

        res.status(200).json({
            success: true,
            message: `Apartments fetched successfully`,
            data: apartments
        })
    } catch (error) {
        console.error('Error fetching apartments:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const getApartmentWithId =  async (req,res) => {
    try {
        const {id} = req.params;
        // console.log(id);

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Apartment ID is required',
            });
        }

        const apartment = await Apartment.findById(id);

        if(!apartment){
            return res.status(404).json({
                success: false,
                message: `Apartment not found`
            });
        }

        res.status(200).json({
            success: true,
            message: `Apartment fetched successfully`,
            data: apartment
        });
        
    } catch (error) {
        console.error('Error fetching apartment:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const updateApartment = async (req,res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Apartment ID is required',
            });
        }
        const { name, address, totalFloors } = req.body;
        
        if(!name || !address || !totalFloors){
            return res.status(400).json({
                success: false,
                message: `Name, Address and Total Floors are required`
            });
        }
        
        const apartment = await Apartment.findByIdAndUpdate(
            id,
            { name, address, totalFloors },
            { new: true, runValidators: true }
        )
        if(!apartment){
            return res.status(404).json({
                success: false,
                message: `Apartment not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Apartment updated successfully',
            data: apartment
        });
        
    } catch (error) {
        console.error('Error updating apartment:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const deleteApartment = async (req,res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Apartment ID is required',
            });
        }
        const apartment = await Apartment.findByIdAndDelete(id);

        if(!apartment){
            return res.status(404).json({
                success: false,
                message: `Apartment not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'Apartment deleted successfully',
            data: apartment
        });
    } catch (error) {
        console.error('Error deleting apartment:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}
