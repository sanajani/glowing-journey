import catchAsync from "../utilities/catchAsync.js";
import AppError from '../utilities/appError.js';
import { PropertyRequiredFields } from "../utilities/validation/PropertyRequiredFields.js";
import { createProperty, getPropertyById, getPropertyByIdAndDelete, getPropertyByIdAndUpdate } from "../services/property/PropertyServices.js";
import { Property } from "../models/property/Property.js";

// add property controller
export const createPropertyController = catchAsync(async (req,res) => {
    const userId = req?.user?._id;
    if(!userId) throw AppError.invalidCredentials("there is no token");

    PropertyRequiredFields(req.body);

    const createdProperty = await createProperty(userId, req.body);
    if(!createdProperty) throw AppError.notFound("Something went wrong createdLisitng is undefind");

    res.status(200).json({
        message:"Success",
        data: "Property created",
        testShowData: createdProperty
    })
});

// get single property controller
export const getSinglePropertyController = catchAsync(async (req,res) => {

    const propertyId = req?.params?.id;

    if(!propertyId) throw AppError.notFound("Property Id is requried");

    const singlePorperty = await getPropertyById(propertyId);

    if(!singlePorperty) throw AppError.notFound("Property Not found or may deleted");

    return res.status(201).json({
        message:"Success",
        data: singlePorperty
    })
});

// get single property and updated
export const getSinglePropertyAndUpdateController = catchAsync(async (req,res) => {
    const updatedProperty = await getPropertyByIdAndUpdate(req?.params?.id, req.body);
    if(!updatedProperty) throw AppError.notFound("Something went wrong || or can't finded");
    
    return res.status(200).json({
        message:"Success",
        data: updatedProperty
    })
})

// delete single property
export const getSinglePropertyAndDeleteController = catchAsync(async (req,res) => {
    const property = await getPropertyByIdAndDelete(req.params.id);

    return res.status(200).json({
        status: "success",
        message: "Property deleted successfully",
        data: property
    });
})

// get all properties 
export const getAllProperties = catchAsync(async (req,res,next) => {
    const page = Number(req?.query?.page) || 1;
    const limit = Number(req?.query?.limit) || 10;
    const skip = (page - 1) * limit;
     const { province, amount, propertyType, transaction, bedroom } = req.query;

    const filters = {
        ...(province && { 'location.province': { $regex: province, $options: 'i' } }),
        ...(amount && { 'price.amount': Number(amount) }),
        ...(propertyType && { propertyType }),
        ...(transaction && { transaction }),
        ...(bedroom && { 'details.bedroom': Number(bedroom) })
    };
    
    
    const properties = await Property
        .find(filters)
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }); // Newest first

          // Get total count for pagination
    const total = await Property.countDocuments(filters);
    
    res.status(200)
    .json({
        message:"Success",
        data: {
            properties,
            pagination: {
                currentPage: Number(page),
                totalPages: Math.ceil(total / limit),
                totalProperties: total,
                hasNext: page < Math.ceil(total / limit),
                hasPrev: page > 1
            },
            filters: Object.keys(filters) // Return applied filters for UI
        }
    })
})
