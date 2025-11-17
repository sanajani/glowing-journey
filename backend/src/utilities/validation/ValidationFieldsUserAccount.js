import { AppError } from "../appError.js";

export const validateRequiredFields = (userData,role) => {
    const {password, username, profile} = userData;

    // Check base required fields
    if (!password) throw AppError.requiredField("Password");
    if (!username) throw AppError.requiredField("Username");
    if (!profile?.name) throw AppError.requiredField("Name");
    if (!profile?.lastName) throw AppError.requiredField("Last Name");

}
