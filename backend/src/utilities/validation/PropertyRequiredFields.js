import { AppError } from "../appError.js";

export const PropertyRequiredFields = (listingFields) => {
    const {title, description, transaction, location, details, price, media} = listingFields;

      // Landlord and Agent specific fields
    if (!title) throw AppError.requiredField("Title");
    if (!description) throw AppError.requiredField("Description");
    if (!transaction) throw AppError.requiredField("Transaction");
    if (!media) throw AppError.requiredField("Media");
    // if (!title) throw AppError.requiredField("Phone Number");

    if (!location?.province) throw AppError.requiredField("Province");
    if (!location?.district) throw AppError.requiredField("District");
    if (!location?.city) throw AppError.requiredField("City");
    if (!location?.streetAddress) throw AppError.requiredField("Street Address");
    if (!location?.landmark) throw AppError.requiredField("LandMark");

    if (!details?.bedroom) throw AppError.requiredField("Bedroom");
    if (!details?.bathroom) throw AppError.requiredField("BathRoom");
    if (!details?.parking) throw AppError.requiredField("Parking");

    if(!price?.amount) throw AppError.requiredField("Price.amount")
}
