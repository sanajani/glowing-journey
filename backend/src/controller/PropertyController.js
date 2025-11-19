import catchAsync from "../utilities/catchAsync.js";
import AppError from '../utilities/appError.js';
import { PropertyRequiredFields } from "../utilities/validation/PropertyRequiredFields.js";
import { createProperty, getPropertyById, getPropertyByIdAndDelete, getPropertyByIdAndUpdate } from "../services/property/PropertyServices.js";

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

// get property controller
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
    // getPropertyByIdAndUpdate
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