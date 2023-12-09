import mongoose from "mongoose";
const DetailsSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: String
})
export const DetailsModel = mongoose.model('details', DetailsSchema);   
