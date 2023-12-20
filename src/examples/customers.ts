import { Accrue } from "../baseApi";
import { ICustomer } from "../types";

const accrue = new Accrue(null);

const customer : ICustomer = {
    firstname: "Clinton",
    email: "clintonmbah@gmail.com",
    lastname: "Mbah",
    country: "VHlwZXM6OkNvdW50cnktZjZmZjQyZTMtZTVmMi00MzkzLTk3NTYtZmFhYTAzYjZhZjUx" // id of the country
}

const run = async() => {
    // TODO: RETURNS 500 INTERNAL SERVER ERROR WHEN THE SAME CUSTOMER IS BEING CREATED TWICE
    const createdCustomer = await accrue.customers.createCustomer(customer);
    const {id} = createdCustomer 

    // TODO: Edit the 'gra' attribute at the end of the query
    // RETURNS UNDEFINED
    const allCustomers = await accrue.customers.getAllCustomers();
    console.log(allCustomers.merchantCustomers);
    
    const result = await accrue.customers.getCustomer(id);
    console.log(result.email);
}

run().then(() => {});