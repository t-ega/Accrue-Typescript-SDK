import { IPaymentMethodTypes } from "../types"
import EndpointsBase from "./base"

export default class PaymentMethodsTypes extends EndpointsBase {

    /**
     * 
     * @param country_id The id of the country you are interested in
     * @returns An array of payments methods for a particular country
     */
    public async paymentMethodTypes(country_id: string){
        const query = `
        query {
            p2pPaymentMethodTypes(country: "${country_id}") {
                id
                identifier
                label
            }
        }`

        return await this.postRequest<IPaymentMethodTypes[]>("p2pPaymentMethodTypes", query);
    }
}