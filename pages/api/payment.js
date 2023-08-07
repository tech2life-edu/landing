const axios = require("axios");

// Datos de la API de D-Local
const apiURL = "https://api.dlocal.com/v1/payments";
const secretKey = "TU_SECRET_KEY";

// Datos del pago
/* const amount = 1000; // Monto del pago en centavos (ejemplo: $10.00)
const currency = "USD"; // Moneda del pago (ejemplo: dólares estadounidenses)
const description = "Ejemplo de pago con D-Local";
const customerName = "Nombre del cliente";
const customerEmail = "correo@cliente.com"; */

const createPayment = async (payload) => {
  const crypto = require("crypto");
  const digest = crypto
    .createHmac("sha256", secretKey)
    .update(JSON.stringify(payload))
    .digest("base64");
  const authorizationHeader = `Basic ${digest}`;

  const headers = {
    "Content-Type": "application/json",
    Authorization: authorizationHeader,
  };

  try {
    const response = await axios.post(apiURL, payload, {
      headers: headers,
    });
    const paymentInfo = response.data;
    if (response.status === 200) {
      console.log("Pago exitoso. ID de transacción:", paymentInfo);
    } else {
      console.error("Error en la solicitud:", response.statusText);
    }
    console.log("Payment info:", paymentInfo);
    return paymentInfo;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error.message);
    return error;
  }
};

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ error: "Método no permitido. Utilice POST." });
  }

  return createPayment(req.body);
}
