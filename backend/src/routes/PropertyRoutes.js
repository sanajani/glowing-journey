import express from 'express';
import { 
    createPropertyController, 
    getAllProperties, 
    getSinglePropertyAndDeleteController, 
    getSinglePropertyAndUpdateController, 
    getSinglePropertyController } from '../controller/PropertyController.js';

import { isAbleTolist, isTheSameAuther } from '../middleware/protected/protectedProperty.js';
import { protect } from '../middleware/protected/protectAuth.js';

const router = express.Router();

// createProperty 
// /api/v1/properties
router
  .route('/properties')
  .post(protect, isAbleTolist, createPropertyController) // create or post a property
  .get(getAllProperties); // get all properties or filtered properties

router
  .route('/properties/:id')
  .get(getSinglePropertyController) // single property
  .patch(protect, isTheSameAuther, getSinglePropertyAndUpdateController)
  .delete(protect, isTheSameAuther, getSinglePropertyAndDeleteController);
export default router;
