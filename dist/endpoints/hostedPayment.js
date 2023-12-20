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
class HostedPayments extends base_1.default {
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
    initiateHostedPayment(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { payment_type, amount, currency = 'usd', firstName, lastName, email, countryCode, reference, redirectUrl, } = options;
            let query = `
        mutation {
        initiateHostedPayment (
            paymentType: ${payment_type},
            amount: ${amount},
            currency: ${payment_type === 'deposit' ? `${currency}` : 'usd'},
            countryCode: "${countryCode}",
            reference: "${reference !== null && reference !== void 0 ? reference : ''}"
            firstName: "${firstName}",
            lastName: "${lastName}",
            email: "${email}",
            redirectUrl: "${redirectUrl !== null && redirectUrl !== void 0 ? redirectUrl : ''}"
        ) {
                id
                hostedLink
                status
            }
        }
        `;
            return yield this.postRequest("initiateHostedPayment", query);
        });
    }
    /**
     *
     * @param {string} payment_id The global ID of the payment request you want to cancel.
     * @note Only payment requests with a status of created can be cancelled.
     * Processed payments with the status of picked_up, completed or canceled cannot be cancelled with this mutation.
     */
    cancelPayment(payment_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        mutation {
        cancelHostedPayment(paymentRequest: "${payment_id}")
        }`;
            this.postRequest("initiateHostedPayment", query);
        });
    }
}
exports.default = HostedPayments;
//# sourceMappingURL=hostedPayment.js.map