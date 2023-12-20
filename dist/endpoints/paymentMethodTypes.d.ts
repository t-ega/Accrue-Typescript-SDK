import { IPaymentMethodTypes } from "../types";
import EndpointsBase from "./base";
export default class PaymentMethodsTypes extends EndpointsBase {
    /**
     *
     * @param country_id The id of the country you are interested in
     * @returns An array of payments methods for a particular country
     */
    paymentMethodTypes(country_id: string): Promise<IPaymentMethodTypes[]>;
}
