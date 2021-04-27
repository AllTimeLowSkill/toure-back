require('dotenv').config()
const stripe = require('stripe')(process.env.SK_STRIPE)
const dollarsToCent = require('dollars-to-cents')

const createPaymentIntent = async ({ body: { amount } }, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: dollarsToCent(amount),
      currency: 'rub',
      payment_method_types: ['card'],
    })

    return res.status(200).send(paymentIntent)
  } catch (error) {
    return res.status(500).send({ message: `${error}` })
  }
}

module.exports = {
  createPaymentIntent,
}
