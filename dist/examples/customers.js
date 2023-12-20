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
// import { ICustomer } from "../types";
const accrue = new baseApi_1.Accrue(null);
// const customer : ICustomer = {
//     firstname: "Clinton",
//     email: "clintonmbah@gmail.com",
//     lastname: "Mbah",
//     country: "VHlwZXM6OkNvdW50cnktZjZmZjQyZTMtZTVmMi00MzkzLTk3NTYtZmFhYTAzYjZhZjUx" // id of the country
// }
const run = () => __awaiter(void 0, void 0, void 0, function* () {
    // TODO: RETURNS 500 INTERNAL SERVER ERROR WHEN THE SAME CUSTOMER IS BEING CREATED TWICE
    // const createdCustomer = await accrue.customers.createCustomer(customer);
    // const {id} = createdCustomer 
    // TODO: Edit the 'gra' attribute at the end of the query
    // RETURNS UNDEFINED
    const allCustomers = yield accrue.customers.getAllCustomers();
    console.log(allCustomers.merchantCustomers);
    const result = yield accrue.customers.getCustomer("VHlwZXM6OkNhc2hyYW1wOjpBUEk6Ok1lcmNoYW50Q3VzdG9tZXItYjY3MmUxMjctMGIzMC00NzRmLWI1ZDMtNzU4ZmZmYTU0ODY1");
    console.log(result.email);
});
run().then(() => { });
//# sourceMappingURL=customers.js.map