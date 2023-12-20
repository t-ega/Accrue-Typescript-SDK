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
const baseApi_1 = require("../baseApi");
const accrue = new baseApi_1.Accrue(null);
const details = {
    accountNumber: "2131645271",
    amountUsd: 100, // NOTE: THIS IS IN USD
    bank: "VHlwZXM6OkJhbmstNDY3NDAyOGMtNDVjYi00N2QwLThlYjYtOWUxZTBhZDMyYzM0" // The id of the bank, if you dont know the id use the banks.getBanks() endpoint
};
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    const banks = yield accrue.bank.getBanks("NG");
    console.log(banks);
    // When the withdrawal has been successfully completed or failed, we'll send you a webhook update
    yield accrue.withdraw.withdrawToBank(details);
});
run().then(() => { });
//# sourceMappingURL=withdrawal.js.map