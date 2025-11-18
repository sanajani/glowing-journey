import {AppError} from "../../utilities/appError.js";
import { User } from "../../models/User/User.js";
import { validateRequiredFields } from "../../utilities/validation/ValidationFieldsUserAccount.js";

import jwt from 'jsonwebtoken';
import { checkPhoneDuplicates } from "../../utilities/validation/checkDuplicatesSingleQuery.js";
import { theseFieldsShouldBeUpdated } from "../../utilities/fieldsToUpdate/FieldsToUpdate.js";
const JWTTOKENCODE = process.env.JWTTOKENCODEENV || 'this is code'
// signup user
export const createUser = async (userData) => {

    const {email, username, role} = userData;
    const phoneNumber1 = userData?.phoneNumber1;
    const phoneNumber2 = userData?.phoneNumber2;

    validateRequiredFields(userData, role);

    const isUserExsit = await User.findOne({
        $or:[
            {email},
            {username},
            {phoneNumber1},
            {phoneNumber2}
        ]
    });
    if (isUserExsit) {
    if (isUserExsit.email === email) AppError.duplicateField('email', email);
    else if (isUserExsit.username === username) AppError.duplicateField('username', username);
    else if (phoneNumber1) AppError.duplicateField('phoneNumber1', phoneNumber1);
    else if (phoneNumber2) AppError.duplicateField('phoneNumber2', phoneNumber2);
  }

    const user = new User(userData);
    const newUser = await user.save();
    return newUser;
}
// login user
export const loginUser = async (userData) => {
    
    const { password, username} = userData;
    if(!username || !password) throw AppError.validationError("Username and Password is required");

    const user = await User.findOne({username}).select("+password");

    if(!user || !(await user.comparePasswords(password))) {
        throw new AppError.invalidCredentials()
    }

    user.password = '';

    const token = jwt.sign({_id :user._id, role: user.role}, JWTTOKENCODE,{
        expiresIn: '90d'
    })
    
    return {
        token,
        user
    };
}

// become agent/landlord
export const becomeSeller = async (_id, userData={}) => {
    // logic
    const checkUser = await User.findOne({phoneNumber1: userData?.phoneNumber1});
    
    if(checkUser && checkUser._id?.toString() !== _id.toString()) throw AppError.duplicateField("phoneNumber1",'phone number 1')
    
    const user = await User.findByIdAndUpdate(_id, userData, {new: true, runValidators: true});
    
    console.log('=================================become seller service===============================================');
    
    if(!user) throw AppError.validationError();
    return user;
}
// updateSingle user
export const updateUser = async (_id, userData={}) => {

    checkPhoneDuplicates(_id,userData);
    const updateFields = theseFieldsShouldBeUpdated(userData);
    const user = await User.findByIdAndUpdate(_id, {$set: updateFields}, {new: true, runValidators: true});
    
    if(!user) throw AppError.validationError();
    return user;
}
// show user profile

export const userProfile = async (_id) => {
    const user = await User.findById(_id);
    if(!user) throw AppError.validationError();

    return user
}