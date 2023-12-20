import { randomUUID } from "crypto";
import { Accrue } from "../baseApi";
import { HostedPaymentOptions } from "../types";

const accrue = new Accrue();

const depositOptions: HostedPaymentOptions = {
    payment_type: "deposit",
    amount: 100,
    currency: "usd",
    countryCode: "NG",
    firstName: "Clinton",
    lastName: "Mbah",
    email: "test@useaccrue.com",
    reference: randomUUID(), // optional but take note to save the uuid if you wish to access this payment layer
    redirectUrl: "https://useaccrue.com" // optional
};

const reference = depositOptions.reference ?? "";

const run = async () => {
    try{

    await accrue.hostedPayment.initiateHostedPayment(depositOptions);

    // GET THE PAYMENT REQUEST
    const request = await accrue.paymentRequst.merchantPaymentRequest(reference);
    console.log("Request amount: ", request.amount)
    console.log("Request id: ", request.id)
    console.log("Request currency: ", request.currency)
    console.log("Request payment type: ", request.paymentType)
    console.log("Request hosted link: ", request.hostedLink);

    }catch(err){
        console.log(`This error occured: ${err}`)
    }
}

run().then(() => {})