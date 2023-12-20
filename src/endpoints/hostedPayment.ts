import { HostedPayment, HostedPaymentOptions } from "../types";
import EndpointsBase from "./base";

export default class HostedPayments extends EndpointsBase {
    /**
     * 
     * @param {HostedPayment } options An object containing the following properties: 
     * - payment_type "deposit" | "withdrawal"
     * - amount For Deposit: The amount you want to charge your customer. For Withdrawal: The USD equivalent you want to off-ramp to a customer's local currency
     * - currency For Deposits: The currency you want to charge the amount in. It can be either usd or local_currency. 
     * The local currency to be charged is determined by the country. For Withdrawals: usd. The local currency equivalent your customer will receive is determined by the country  
     * - firstName Your customer's first name
     * - lastName Your customer's last name
     * - email Your customer's email
     * - countryCode The two-letter ISO code of the country your customer is resident in. We can charge them in the country's local currency.
     * - reference Your unique reference (optional)
     * - redirectUrl The URL you want us to redirect your customer to after the transaction is completed. (optional)
     * 
     * @returns payment status with the id, status and hostedlink for payment
     * 
     */
    public async initiateHostedPayment( options: HostedPaymentOptions){
        const {
            payment_type,
            amount,
            currency = 'usd',
            firstName,
            lastName,
            email,
            countryCode,
            reference,
            redirectUrl,
          } = options;
        let query = `
        mutation {
        initiateHostedPayment (
            paymentType: ${payment_type},
            amount: ${amount},
            currency: ${payment_type === 'deposit' ? `${currency}` : 'usd'},
            countryCode: "${countryCode}",
            reference: "${reference ?? ''}"
            firstName: "${firstName}",
            lastName: "${lastName}",
            email: "${email}",
            redirectUrl: "${redirectUrl ?? ''}"
        ) {
                id
                hostedLink
                status
            }
        }
        `
        return await this.postRequest<HostedPayment>("initiateHostedPayment", query);
    }

    
    /**
     * 
     * @param {string} payment_id The global ID of the payment request you want to cancel.
     * @note Only payment requests with a status of created can be cancelled. 
     * Processed payments with the status of picked_up, completed or canceled cannot be cancelled with this mutation.
     */
    public async cancelPayment(payment_id: string){
        const query = `
        mutation {
        cancelHostedPayment(paymentRequest: "${payment_id}")
        }`
        
        this.postRequest<null>("initiateHostedPayment", query);
    }
    
}