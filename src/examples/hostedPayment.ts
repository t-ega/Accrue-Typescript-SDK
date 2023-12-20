import { randomUUID } from "crypto";
import { Accrue } from "../baseApi";
import { HostedPaymentOptions } from "../types";

// Here we have passed in the secret key for the API,
// you can just set it in the environment variable if you dont want to do this
const accrue = new Accrue(null, 'CSHRMP-SECK_JhXVwZiBKHM37EdJ');

const withdrawalOptions: HostedPaymentOptions = {
    payment_type: "deposit",
    amount: 100,
    currency: "usd",
    countryCode: "NG",
    firstName: "Clinton",
    lastName: "Mbah",
    email: "test@useaccrue.com",
    reference: randomUUID(), // optional
    redirectUrl: "https://useaccrue.com" // optional
};
  

const depositOptions: HostedPaymentOptions = {
    payment_type: "withdrawal",
        amount: 0,
        countryCode: "NG",
        firstName: "Clinton",
        lastName: "Mbah",
        email: "test@useaccrue.com",
        currency: "usd", // optional
        reference: randomUUID(), // optional
        redirectUrl: "https://useaccrue.com", // optional
};

const run = async () => {
    try{

    const payment = await accrue.hostedPayment.initiateHostedPayment(depositOptions);

    const {id, hostedLink, status} = payment;
    console.log("Payment Id: ", id);
    console.log("Payment link: ", hostedLink);
    console.log("Payment status: ", status);
    
    // cancel the payment just made
    await accrue.hostedPayment.cancelPayment(id);
    
    const withdrawal = await accrue.hostedPayment.initiateHostedPayment(withdrawalOptions);
    
    
    console.log("Withdrawal Id: ", withdrawal.id);
    console.log("Withdrawal link: ", withdrawal.hostedLink);
    console.log("Withdrawal status: ", withdrawal.status);
    
    // cancel the withdarwal just made
    await accrue.hostedPayment.cancelPayment(withdrawal.id);

    }catch(err){
        console.log(`This error occured: ${err}`)
    }
}

run().then(() => {})
