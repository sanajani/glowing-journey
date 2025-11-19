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
  .post(protect, isAbleTolist, createPropertyController)
  .get(getAllProperties);

router
  .route('/properties/:id')
  .get(getSinglePropertyController)
  .patch(protect, isTheSameAuther, getSinglePropertyAndUpdateController)
  .delete(protect, isTheSameAuther, getSinglePropertyAndDeleteController);
export default router;
