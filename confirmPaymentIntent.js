const confirmPaymentIntent =await stripe.confirmPaymentIntent({ 
    clientSecret:"CLIENT SECRET FROM SERVER PAYMENT INTENT ",
    paymentMethodId:"PAYMENT METHOD ID "
   payment_method: {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' +Secretkey
          },
        },
  }
