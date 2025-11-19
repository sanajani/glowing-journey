import express from 'express';
import { createPropertyController, getSinglePropertyAndDeleteController, getSinglePropertyAndUpdateController, getSinglePropertyController } from '../controller/PropertyController.js';
import { isAbleTolist, isTheSameAuther } from '../middleware/protected/protectedProperty.js';
import { protect } from '../middleware/protected/protectAuth.js';

const router = express.Router();

// createProperty 
// /api/v1/properties
router.post('/properties', protect ,isAbleTolist,createPropertyController);
router.get('/properties/:id', getSinglePropertyController);
router.patch('/properties/:id', protect ,isTheSameAuther ,getSinglePropertyAndUpdateController);
router.delete('/properties/:id', protect ,isTheSameAuther ,getSinglePropertyAndDeleteController);

export default router;
