const paymentMethod = await stripe.paymentRequestWithCardForm({
  // Only iOS support this options
  smsAutofillDisabled: true,
  requiredBillingAddressFields: 'full',
  prefilledInformation: {
    billingAddress: {
      name: 'Charan Gowda',
      line1: 'Budigere',
      line2: 'Devanahalli',
      city: 'Bangalore',
      state: 'Karnataka',
      country: 'IN',
      postalCode: '562129',
      email: 'charangowda845@gmail.com',
    },
  },
});
