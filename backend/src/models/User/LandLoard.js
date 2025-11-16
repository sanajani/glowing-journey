import { Schema } from "mongoose";
import { User } from "./User.js";

const landlordSchema = new Schema({
    phoneNumber1: {
        type: String,
        required:[true, 'phone number is required'],
        unique: true,
        sparse: true,
    },
    phoneNumber2: {
        type: String,
        unique: true,
        sparse: true,
    },
    contact: {
        province: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        streetAddress: { type: String, required: true },
        coordinate: { type: String, required: true }
    }
})

const Landlord = User.discriminator('landlord', landlordSchema);
export {Landlord}
