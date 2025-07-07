import mongoose from "mongoose";

const waterBillSchema = new mongoose.Schema({
    flatId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Flat',
        required: true
    },
    currentReading: {
        type: Number,
        required: true,
        min: 0
    },
    month: {
        type: Number,
        required: true,
        min: 1,
        max: 12
    },
    year: {
        type: Number,
        required: true,
        min: 2023,
        max: new Date().getFullYear()
    },
},{ timestamps: true }
);

// Add compound index to prevent duplicate entries for same flat+month+year
waterBillSchema.index({ flatId: 1, month: 1, year: 1 }, { unique: true });

export default mongoose.model('WaterBill', waterBillSchema);