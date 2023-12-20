import { ICustomer, ICustomerResponse, IGetCustomer } from "../types";
import EndpointsBase from "./base";

export default class Customer extends EndpointsBase {
    /**
     * 
     * @param options An object with the email,country id firstname and lastname of the customer
     * @returns A customer object already created
     */

    public async createCustomer (options: ICustomer) {
        const {email, firstname, lastname, country} = options;
        const query = `
        mutation {
            createCustomer(
                email: "${email}",
                firstName: "${firstname}",
                lastName: "${lastname}",
                country: "${country}"
            ) {
                id
                email
                firstName
                lastName
            }
        }
        `
        return await this.postRequest<IGetCustomer>("createCustomer", query);
    }

    /**
     * @param endCursor - merchantCustomers is a paginated field. To fetch more data, 
     * you can pass in an endCursor as an after argument to it.
     * @see Customer#createCustomer to create a customer
     * @see Customer#getCustomer to get a particular customer
     * @returns {ICustomerResponse[]} A list of customer objects. 
     */
    // public async getAllCustomers () : Promise<ICustomerResponse[]>
    // public async getAllCustomers(endCursor: string): Promise<ICustomerResponse[]>;
    public async getAllCustomers(): Promise<ICustomerResponse> {
        const query = `
        query {
            account {
                merchantCustomers{
                    nodes {
                        id
                        email
                        firstName
                        lastName
                    }
                    pageInfo {
                        startCursor
                        endCursor
                        hasNextPage
                        hasPreviousPage
                    }
                }
            }
        }`

            return await this.postRequest<ICustomerResponse>("account", query)
    }
    /**
     * 
     * @param customer_id The ID of the customer
     * @returns A customer object
     */

    public async getCustomer(customer_id: string) {
        const query = `
        query {
            node(id: "${customer_id}") {
                ... on MerchantCustomer {
                    id
                    email
                    firstName
                    lastName
                }
            }
        }
        `
        return await this.postRequest<IGetCustomer>("node", query);

    }
}
