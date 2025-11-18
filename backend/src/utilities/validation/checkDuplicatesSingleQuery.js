import {User} from '../../models/User/User.js'

export const checkPhoneDuplicates = async (_id, userData) => {
    const conditions = [];

    if (userData.phoneNumber1) {
        conditions.push({ phoneNumber1: userData.phoneNumber1 });
    }
    if (userData.phoneNumber2) {
        conditions.push({ phoneNumber2: userData.phoneNumber2 });
    }

    if (conditions.length === 0) return;

    const existingUser = await User.findOne({
        _id: { $ne: _id },
        $or: conditions
    });

    if (existingUser) {
        if (existingUser.phoneNumber1 === userData.phoneNumber1) {
            throw AppError.duplicateField('phoneNumber1', userData.phoneNumber1);
        }
        if (existingUser.phoneNumber2 === userData.phoneNumber2) {
            throw AppError.duplicateField('phoneNumber2', userData.phoneNumber2);
        }
    }
};