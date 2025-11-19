import { Property } from "../../models/property/Property.js";
import AppError from "../../utilities/appError.js";

// create a Property services
export const createProperty = async (userId,propertyData) => {

    const property = new Property({
        ...propertyData,
        user: userId
    });
    const newProperty = await property.save()

    return newProperty
};

// get single Property services
export const getPropertyById = async (propertyId) => {
    const singlePorperty = await Property.findById(propertyId);
    if(!singlePorperty) throw AppError.notFound("Property Not found or Deleted by auther");

    return singlePorperty;
};

// get single property and update it
export const getPropertyByIdAndUpdate = async () => {}

// get single property and delete it
export const getPropertyByIdAndDelete = async (propertyId) => {
    const deletedProperty = await Property.findByIdAndDelete(propertyId);
    if (!deletedProperty) throw AppError.notFound("Property not found");

    return deletedProperty;
};
