export const theseFieldsShouldBeUpdated = (userData) => {
  const fieldsToUpdate = {};
  if (userData?.profile?.name) {
    fieldsToUpdate["profile.name"] = userData?.profile?.name;
  }
  if (userData?.profile?.lastName) {
    fieldsToUpdate["profile.lastName"] = userData?.profile?.lastName;
  }
  if (userData.phoneNumber1) {
    fieldsToUpdate.phoneNumber1 = userData.phoneNumber1;
  }
  if (userData.phoneNumber2) {
    fieldsToUpdate.phoneNumber2 = userData.phoneNumber2;
  }
  if (userData.role) {
    fieldsToUpdate.role = userData.role;
  }
  if (userData?.contact?.province) {
    fieldsToUpdate["contact.province"] = userData?.contact?.province;
  }
  if (userData?.contact?.city) {
    fieldsToUpdate["contact.city"] = userData?.contact?.city;
  }
  if (userData?.contact?.district) {
    fieldsToUpdate["contact.district"] = userData?.contact?.district;
  }
  if (userData?.contact?.streetAddress) {
    fieldsToUpdate["contact.streetAddress"] = userData?.contact?.streetAddress;
  }
  if (userData?.contact?.coordinate) {
    fieldsToUpdate["contact.coordinate"] = userData?.contact?.coordinate;
  }
  if (userData?.company?.companyName) {
    fieldsToUpdate["company.companyName"] = userData?.company?.companyName;
  }
  if (userData?.company?.licenseNumber) {
    fieldsToUpdate["company.licenseNumber"] = userData?.company?.licenseNumber;
  }
  return fieldsToUpdate;
};
