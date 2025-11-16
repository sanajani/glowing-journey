import { User } from './User.js';
import { Schema } from 'mongoose';

const agentSchema = new Schema({
    phoneNumber1: {
        type: String,
        required: [true, "Phone number is required"],
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
    },
    company: {
        companyName: { type: String, required: true },
        licenseNumber: { type: String, required: true }
    }
});

const Agent = User.discriminator("agent", agentSchema)

export {Agent};
