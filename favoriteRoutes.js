import express from 'express';
import {
  getFavorites,
  addFavorite,
  removeFavorite
} from '../controllers/favoriteController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').get(protect, getFavorites).post(protect, addFavorite);
router.route('/:articleId').delete(protect, removeFavorite);

export default router;
