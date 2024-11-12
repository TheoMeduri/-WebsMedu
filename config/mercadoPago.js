const mercadopago = require('mercadopago');

// Configura as credenciais do Mercado Pago
mercadopago.configure({
    access_token: 'APP_USR-7259900415264953-091214-a153fc77e32ac4a73815778b4d89cb67-1421574360' // Substitua pelo seu Access Token
});

module.exports = mercadopago;