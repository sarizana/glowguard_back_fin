import axios from 'axios';

export const sendWhatsAppMessage = async (req, res) => {
  const { doctorPhone, userMessage } = req.body;

  if (!doctorPhone || !userMessage) {
    return res.status(400).json({ error: "Missing doctorPhone or userMessage" });
  }

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/${process.env.WHATSAPP_PHONE_ID}/messages`,
      {
        messaging_product: "whatsapp",
        to: doctorPhone,
        type: "text",
        text: { body: userMessage },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.WHATSAPP_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("WhatsApp error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to send WhatsApp message" });
  }
};
