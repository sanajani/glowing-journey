import { Listing } from "../../models/listing/Listing.js";

export const createListing = async (userId,lisitingData) => {

    const lisitng = new Listing({
        ...lisitingData,
        user: userId
    });
    const newListing = await lisitng.save()

    return newListing
}
