import { ICustomer, ICustomerResponse, IGetCustomer } from "../types";
import EndpointsBase from "./base";
export default class Customer extends EndpointsBase {
    /**
     *
     * @param options An object with the email,country id firstname and lastname of the customer
     * @returns A customer object already created
     */
    createCustomer(options: ICustomer): Promise<ICustomerResponse>;
    /**
     * @param endCursor - merchantCustomers is a paginated field. To fetch more data,
     * you can pass in an endCursor as an after argument to it.
     * @see Customer#createCustomer to create a customer
     * @see Customer#getCustomer to get a particular customer
     * @returns {ICustomerResponse[]} A list of customer objects.
     */
    getAllCustomers(): Promise<ICustomerResponse>;
    /**
     *
     * @param customer_id The ID of the customer
     * @returns A customer object
     */
    getCustomer(customer_id: string): Promise<IGetCustomer>;
}
