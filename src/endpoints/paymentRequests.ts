import { IPaymentRequest } from "../types";
import EndpointsBase from "./base";

export default class PaymentRequests extends EndpointsBase {
    /**
     * 
     * @param reference The reference of the payment that was created
     * @see HostedPayments#initiateHostedPayment for details on how to create a payment request.
     * @returns A payment request object
     */
    public async merchantPaymentRequest(reference: string){
        const query = `query {
            merchantPaymentRequest(reference: "${reference}") {
                id
                paymentType
                hostedLink
                amount
                currency
                reference
                status
            }
        }`

        return await this.postRequest<IPaymentRequest>("merchantPaymentRequest", query);

    }
}