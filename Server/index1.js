require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_TEST_SK);
const express = require('express');

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

const app = express();

// Use JSON parser for all non-webhook routes
app.use((req, res, next) => {
  if (req.originalUrl === '/api/stripe/webhook') {
    next();
  } else {
    express.json()(req, res, next);
  }
});

// Stripe requires the raw body to construct the event
app.post('/api/stripe/webhook', express.raw({type: 'application/json'}), (req, res) => {
  console.log(req.body)
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
  } catch (err) {
    // On error, log and return the error message
    console.log(`❌ Error message: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Successfully constructed event
  console.log('✅ Success:', event.id);

  // Return a response to acknowledge receipt of the event
  res.json({received: true});
});

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});