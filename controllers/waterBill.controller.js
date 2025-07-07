import waterbillModel from "../models/waterbill.model.js";

export const addWaterBill = async (req, res) => {
    const { flatId, currentReading, month, year } = req.body;

    if (!flatId || !currentReading || !month || !year) {
        return res.status(400).json({
            success: false,
            message: 'Flat ID, currentReading, month, and year are required',
        });
    }

    try {
        const waterbill = new waterbillModel({
            flatId,
            currentReading,
            month,
            year
        });
        const savedWaterbill = await waterbill.save();
        
        res.status(201).json({
            success: true,
            message: `Flat added successfully`,
            data: savedWaterbill
        });
        
    } catch (error) {
        console.error('Error adding waterBill:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const getWaterBills = async (req, res) => {
    try {
        const waterBills = await waterbillModel.find();
        res.status(200).json({
            success: true,
            message: `waterBills fetched successfully`,
            data: waterBills
        })
    } catch (error) {
        console.error('Error fetching waterBills!', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const getWaterBillwithFlatId = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'Flat ID is required',
            });
        }
        const waterBills = await waterbillModel.find({ flatId: id });
        if (!waterBills || waterBills.length === 0) {
            return res.status(404).json({
                success: false,
                message: `waterBills not found for flatId: ${id}`
            });
        }
        res.status(200).json({
            success: true,
            message: `${waterBills.length} water bill(s) fetched successfully`,
            data: waterBills
        });
    } catch (error) {
        console.error('Error fetching waterBills!', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const updateWaterBill = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'waterBill ID is required',
            });
        }
        const { flatId, currentReading, month, year } = req.body;
        if (!flatId || !currentReading || !month || !year) {
            return res.status(400).json({
                success: false,
                message: 'Flat ID, currentReading, month, and year are required',
            });
        }
        const updatedWaterBill = await waterbillModel.findByIdAndUpdate(
            id,
            { flatId, currentReading, month, year },
            { new: true, runValidators: true }
        );
        if (!updatedWaterBill) {
            return res.status(404).json({
                success: false,
                message: `waterBill not found`
            });
        }

        res.status(200).json({
            success: true,
            message: 'waterBill updated successfully',
            data: updatedWaterBill
        });

    } catch (error) {
        console.error('Error updating waterBill: ', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const deleteWaterBill = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'waterBill ID is required',
            });
        }
        const deletedWaterBill = await waterbillModel.findByIdAndDelete(id);
        if (!deletedWaterBill) {
            return res.status(404).json({
                success: false,
                message: `waterBill not found`
            });
        }
        res.status(200).json({
            success: true,
            message: 'waterBill deleted successfully',
            data: deletedWaterBill
        });

    } catch (error) {
        console.error('Error deleting waterBill: ', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}