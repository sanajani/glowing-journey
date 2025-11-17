import { AppError } from "../appError.js";

export const validationFieldsBecomeSeller = (userData,role) => {
    const {phoneNumber1, contact, company} = userData;

      // Landlord and Agent specific fields
    if (!phoneNumber1) throw AppError.requiredField("Phone Number");
    if (!contact?.province) throw AppError.requiredField("Province");
    if (!contact?.district) throw AppError.requiredField("District");
        // Agent specific fields
    if (role === 'agent') {
        if (!company?.companyName) throw AppError.requiredField("Company Name");
        if (!company?.licenseNumber) throw AppError.requiredField("License Number");
    }
}
