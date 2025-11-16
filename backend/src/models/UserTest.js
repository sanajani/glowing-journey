// import { model, Schema } from 'mongoose';
// import validator from 'validator'

// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: [true, 'Email is required'],
//         unique: true,
//         lowercase: true,
//         validate:[validator.isEmail, "Please provide a valid email"],
//         index: true
//     },
//     password: {
//         type: String,
//         required: [true, 'Password is Required'],
//         minlength: [8, 'Password must be at least 8 characters'],
//         select: false // Don't return password in queries
//     },
//     passwordConfirm:{
//         type:String,
//         required: [true, "Confirm Password"]
//     },
//     phoneNumber1: {
//         type: String,
//         required: [true, "phoneNumber 1 is required"],
//         unique: true,
//         index: true,
//     },
//     phoneNumber2: {
//         type: String,
//         unique: true,
//     },
//     profile: {
//         name: {
//             type: String,
//             required: [true, "Name field is required"],
//             trim: true,
//             maxlength: [50, 'Max length is 50'],
//             minlength: [2, "Min length is 2"]
//         },
//         lastName: {
//             type: String,
//             required: [true, "lastName 1 is required"],
//             maxlength: [50, 'Max length is 50'],
//             minlength: [2, "Min length is 2"]
//         },
//         avatar: {
//             type: String,
//         },
//         nationalIdCard: {
//             type: String
//         }
//     },
//     contact: {
//         province: {
//             type:String,
//             required:true,
//         },
//         city:{
//             type:String,
//             required: true,
//         },
//         district: {
//             type: String,
//             required: true,
//         },
//         streetAddress: {
//             type: String,
//             required: true
//         },
//         coordinate: {
//             type: String,
//             required: true,
//         }
//     },
//     status:{
//         type: String,
//         enum: ['active','inactive','suspended','pending-verification'],
//         default: 'pending-verification'
//     },
//     role:{
//         type: String,
//         enum: ['tenant','landlord','agent','admin'],
//         default: 'tenant'
//     },
//     permissions: [String],
//     stats:{
//         totalListing: {
//             type: Number,
//             default:0,
//             min: 0,
//         },
//         averageRating:{
//             type: Number,
//             default: 0,
//             min: 0
//         },
//         totalReviews:{
//             type:Number,
//             default: 0,
//             min: 0,
//         },
//         completeBooking:{
//             type:Number,
//             default:0,
//             min:0
//         },
//         responseRate:{
//             type:Number,
//             default:0,
//             min:0,
//             max:100
//         },
//         responseTime:{
//             type:Number,
//             default:0,
//             min:0,
//         }
//     }   
// },{
//     timestamps: true
// })
// // Add indexes for better query performance
// userSchema.index({ 'profile.name': 1, 'profile.lastName': 1 });
// userSchema.index({ status: 1, role: 1 });
// userSchema.index({ 'stats.averageRating': -1 });


// // make hash the password
// userSchema.pre("save",async function(next) {
//   if(!this.isModified('password')) return next();
  
//   this.password = await bcrypt.hash(this.password, 12);
//   this.passwordConfirm = undefined; 
//   next();
// })

// // compare passwords
// userSchema.methods.comparePasswords = async function(candidatePassword){
//     return await bcrypt.compare(candidatePassword, this.password)
// }

// const User = model("User", userSchema)

// export {User};