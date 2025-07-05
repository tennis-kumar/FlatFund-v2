import mongoose from "mongoose";

const flatSchema = new mongoose.Schema({
    flatNumber: {
        type: String,
        required: true,
        unique: true
    },
    floorNumber: {
        type: Number,
        required: true
    },
    apartmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Apartment',
        required: true
    }

});

export default mongoose.model('Flat', flatSchema);