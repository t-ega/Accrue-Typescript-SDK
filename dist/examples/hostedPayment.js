"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const baseApi_1 = require("../baseApi");
// Here we have passed in the secret key for the API,
// you can just set it in the environment variable if you dont want to do this
const accrue = new baseApi_1.Accrue(null, 'CSHRMP-SECK_JhXVwZiBKHM37EdJ');
const withdrawalOptions = {
    payment_type: "deposit",
    amount: 100,
    currency: "usd",
    countryCode: "NG",
    firstName: "Clinton",
    lastName: "Mbah",
    email: "test@useaccrue.com",
    reference: (0, crypto_1.randomUUID)(), // optional
    redirectUrl: "https://useaccrue.com" // optional
};
const depositOptions = {
    payment_type: "withdrawal",
    amount: 0,
    countryCode: "NG",
    firstName: "Clinton",
    lastName: "Mbah",
    email: "test@useaccrue.com",
    currency: "usd", // optional
    reference: (0, crypto_1.randomUUID)(), // optional
    redirectUrl: "https://useaccrue.com", // optional
};
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield accrue.hostedPayment.initiateHostedPayment(depositOptions);
        const { id, hostedLink, status } = payment;
        console.log("Payment Id: ", id);
        console.log("Payment link: ", hostedLink);
        console.log("Payment status: ", status);
        // cancel the payment just made
        yield accrue.hostedPayment.cancelPayment(id);
        const withdrawal = yield accrue.hostedPayment.initiateHostedPayment(withdrawalOptions);
        console.log("Withdrawal Id: ", withdrawal.id);
        console.log("Withdrawal link: ", withdrawal.hostedLink);
        console.log("Withdrawal status: ", withdrawal.status);
        // cancel the withdarwal just made
        yield accrue.hostedPayment.cancelPayment(withdrawal.id);
    }
    catch (err) {
        console.log(`This error occured: ${err}`);
    }
});
run().then(() => { });
//# sourceMappingURL=hostedPayment.js.map