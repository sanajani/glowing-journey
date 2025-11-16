import {AppError} from "../utilities/appError.js";
import { User } from "../models/User/User.js";
import { Landlord } from '../models/User/LandLoard.js'
import { Tenant } from "../models/User/Tenant.js";
import { Agent } from "../models/User/Agent.js";
import { validateRequiredFields } from "../utilities/ValidationFieldsUserAccount.js";

import jwt from 'jsonwebtoken';

export const createUser = async (userData) => {

    const {email, username, phoneNumber1, role} = userData;
    validateRequiredFields(userData, role);

    const isUserExsit = await User.findOne({
        $or:[
            {email},
            {username}
        ]
    });
    if (isUserExsit) {
    if (isUserExsit.email === email) {
      throw AppError.duplicateField('email', email);
    } else if (isUserExsit.username === username) {
      throw AppError.duplicateField('username', username);
    }
  }
    
    if(['agent','landlord'].includes(role)){
        const isPhoneExist = await User.findOne({phoneNumber1});
        if(isPhoneExist) throw AppError.duplicateField('phoneNumber1', phoneNumber1);
    }

    const userModels = {
        landlord:Landlord,
        agent: Agent,
        tenant: Tenant
    }
    const userModel = userModels[role] || Tenant;
    const user = new userModel(userData);
    const newUser = await user.save();
    return newUser;
}

export const getAllUsers = async () => {
    const users = await User.find();
    return users;
}

export const loginUser = async (userData) => {
    console.log(userData);
    
    const {name, password, username} = userData;
    if(!username || !name || !password) throw new AppError("All fields are required",'fail to get name phoneNumber and password','fail',400);

    const user = await User.findOne({username}).select("+password");

    if(!user || !(await user.comparePasswords(password))) {
        throw new AppError("Invalid Credintials", 401)
    }

    user.password = '';

    const token = jwt.sign({_id :user._id, role: user.role}, 'thisisseceretkey',{
        expiresIn: '90d'
    })
    
    return {
        token,
        user
    };
}
