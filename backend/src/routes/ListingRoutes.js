import express, { Router } from 'express';
import { createListingController } from '../controller/ListingController.js';
import { protectListing } from '../middleware/protected/protectedListing.js';

const router = express.Router();

// createlisting 
// /api/v1/listing
router.post('/listing', protectListing,createListingController);

export default router;
