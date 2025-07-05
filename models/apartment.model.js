import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    totalFloors: {
        type: Number,
        required: true,
    }
},{
  timestamps: true
});


export default mongoose.model("Apartment", apartmentSchema);