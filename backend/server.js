require('dotenv').config();
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PW2SCLyAjsWjDSHBVb440NHSnxAkGjWLA9j0izNjU131toziSzgZfDRm0oQ2hRvQTCDJeJtAPtsHPuKDkjg9ZHj00a94sFjcD");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("system");
});

app.post("/payment", async (req, res) => {
  try {
    const { items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).send("No items in the cart");
    }

    const lineItems = await Promise.all(items.map(async (item) => {
      if (!item.name || !item.price || !item.quantity) {
        throw new Error("Missing item details");
      }

      const product = await stripe.products.create({
        name: item.name,
      });

      const price = await stripe.prices.create({
        product: product.id,
        unit_amount: item.price,
        currency: "inr",
      });

      return {
        price: price.id,
        quantity: item.quantity,
      };
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/failure",
      customer_email: "shivamskjofficial@gmail.com",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating payment session:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
