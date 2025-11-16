
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const baseUserSchema = new Schema({
    email:{
        type: String,
        unique: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: [true, 'Password is Required'],
        minlength: [8, 'Password must be at least 8 characters'],
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
    }
},{timestamps: true, discriminatorKey:'role'})

baseUserSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12)
})

baseUserSchema.methods.comparePasswords = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model("User", baseUserSchema)

export {User}