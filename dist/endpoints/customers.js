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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = __importDefault(require("./base"));
class Customer extends base_1.default {
    /**
     *
     * @param options An object with the email,country id firstname and lastname of the customer
     * @returns A customer object already created
     */
    createCustomer(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, firstname, lastname, country } = options;
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
        `;
            return yield this.postRequest("createCustomer", query);
        });
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
    getAllCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
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
        }`;
            return yield this.postRequest("account", query);
        });
    }
    /**
     *
     * @param customer_id The ID of the customer
     * @returns A customer object
     */
    getCustomer(customer_id) {
        return __awaiter(this, void 0, void 0, function* () {
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
        `;
            return yield this.postRequest("node", query);
        });
    }
}
exports.default = Customer;
//# sourceMappingURL=customers.js.map