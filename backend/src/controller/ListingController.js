import catchAsync from "../utilities/catchAsync.js";
import AppError from '../utilities/appError.js';
import { ListingHouseRequiredFields } from "../utilities/validation/ListingHouseRequiredFields.js";
import { createListing } from "../services/listing/ListingHouseServices.js";

export const createListingController = catchAsync(async (req,res) => {
    const userId = req?.user?._id;
    if(!userId) throw AppError.invalidCredentials("there is no token");

    ListingHouseRequiredFields(req.body);

    const createdListing = await createListing(userId, req.body);
    if(!createdListing) throw AppError.notFound("Something went wrong createdLisitng is undefind");

    res.status(200).json({
        message:"Success",
        data: "Listing created",
        testShowData: createdListing
    })
})
