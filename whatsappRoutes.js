import express from 'express';
import { sendWhatsAppMessage } from '../controllers/whatsappController.js';

const router = express.Router();

router.post('/send-whatsapp', sendWhatsAppMessage);

export default router;
