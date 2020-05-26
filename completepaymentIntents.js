const functions = require('firebase-functions');
const stripe=require('./node_modules/stripe')(Secretkey);

exports.completepaymentIntents= functions.https.onRequest((request, response) => {
console.log("request",request.body)
 stripe.paymentIntents.create({
        amount: request.body.amount *100,
        currency: request.body.currency,
        setup_future_usage: 'off_session',
        payment_method_types: ['card'],
        metadata: {
          order_id: '6735',
        },
          receipt_email:request.body.email,
           description:'SuccessFull' , 
   shipping: {
    name:request.body.name,
    address: {
      line1:  request.body.line1,
      postal_code:  request.body.postalCode,
      city:  request.body.city,
      state:request.body.state,
      country: request.body.country,
    }
  },
    }).then((charge) => {
           
           return response.send(charge);
        })
        .catch(err =>{
         return err;
        });
})
