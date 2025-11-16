import { AppError } from "./appError.js";

export const validateRequiredFields = (userData,role) => {
    const {password, username, phoneNumber1, profile, contact, company} = userData;

    // Check base required fields
    if (!password) throw new AppError("Password is required", 400);
    if (!username) throw new AppError("Username is required", 400);
    if (!profile?.name) throw new AppError("Name is required", 400);
    if (!profile?.lastName) throw new AppError("Last name is required", 400);

      // Landlord and Agent specific fields
    if (role === 'landlord' || role === 'agent') {
        if (!phoneNumber1) throw new AppError("Phone number is required", 400);
        if (!contact?.province) throw new AppError("Province is required", 400);
        if (!contact?.district) throw new AppError("District is required", 400);
    }
        // Agent specific fields
    if (role === 'agent') {
        if (!company?.companyName) throw new AppError("Company name is required", 400);
        if (!company?.licenseNumber) throw new AppError("License number is required", 400);
    }

}