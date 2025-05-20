import express from 'express';
import { verifyWebhook, receiveWhatsAppMessage } from '../controllers/webhookController.js';

const router = express.Router();
router.get('/webhook', verifyWebhook);
router.post('/webhook', receiveWhatsAppMessage);
export default router;
