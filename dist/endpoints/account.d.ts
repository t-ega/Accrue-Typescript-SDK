import { IAccount } from "../types";
import EndpointsBase from "./base";
export default class Account extends EndpointsBase {
    /**
     * Use this endpoint to get your account details
     * @returns {IAccount} An account object with the id, accountBalance and depositAddress
     */
    getAccountDetails(): Promise<IAccount>;
}
