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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const baseApi_1 = require("../baseApi");
// Here we have passed in the secret key for the API,
// you can just set it in the environment variable if you dont want to do this
const accrue = new baseApi_1.Accrue(null);
const depositOptions = {
    payment_type: "deposit",
    amount: 100,
    currency: "usd",
    countryCode: "NG",
    firstName: "Clinton",
    lastName: "Mbah",
    email: "test@useaccrue.com",
    reference: (0, crypto_1.randomUUID)(), // optional but take note to save the uuid if you wish to access this payment layer
    redirectUrl: "https://useaccrue.com" // optional
};
const reference = (_a = depositOptions.reference) !== null && _a !== void 0 ? _a : "";
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield accrue.hostedPayment.initiateHostedPayment(depositOptions);
        // GET THE PAYMENT REQUEST
        const request = yield accrue.paymentRequst.merchantPaymentRequest(reference);
        console.log("Request amount: ", request.amount);
        console.log("Request id: ", request.id);
        console.log("Request currency: ", request.currency);
        console.log("Request payment type: ", request.paymentType);
        console.log("Request hosted link: ", request.hostedLink);
    }
    catch (err) {
        console.log(`This error occured: ${err}`);
    }
});
run().then(() => { });
//# sourceMappingURL=paymentRequests.js.map