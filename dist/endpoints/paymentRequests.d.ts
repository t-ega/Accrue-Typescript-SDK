import { IPaymentRequest } from "../types";
import EndpointsBase from "./base";
export default class PaymentRequests extends EndpointsBase {
    /**
     *
     * @param reference The reference of the payment that was created
     * @see HostedPayments#initiateHostedPayment for details on how to create a payment request.
     * @returns A payment request object
     */
    merchantPaymentRequest(reference: string): Promise<IPaymentRequest>;
}
