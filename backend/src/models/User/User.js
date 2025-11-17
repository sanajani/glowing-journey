
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const baseUserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        lowercase:true,
        index:true
    },
    email:{
        type: String,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true, 'Password is Required'],
        minlength: [4, 'Password must be at least 4 characters'],
        select: false
    },
    profile:{
        name:{
            type: String,
            required: [true, "Name is required"],
            trim: true,
            maxlength: 50,
            minlength: 2
        },
        lastName: {
            type: String,
            required: [true, "Last name is required"],
            maxlength: 50,
            minlength: 2
        }
    },
    role: {
        type: String,
        enum: ['tenant','landlord','agent','admin'],
        default: 'tenant'
    },
      phoneNumber1: {
        type: String,
        unique: true,
        sparse: true,
    },
    phoneNumber2: {
        type: String,
        unique: true,
        sparse: true,
    },
    contact: {
        province: { type: String},
        city: { type: String},
        district: { type: String},
        streetAddress: { type: String},
        coordinate: { type: String}
    },
    company: {
        companyName: { type: String},
        licenseNumber: { type: String}
    }
},{timestamps: true})

baseUserSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12)
})

baseUserSchema.methods.comparePasswords = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model("User", baseUserSchema)

export {User}