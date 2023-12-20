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
class Withdrawal extends base_1.default {
    /**
     * @summary Convert your USD balance to local currency and withdraw to a bank account
        Cashramp's API allows you to automatically convert your USD stablecoin balance to local
        currency and withdraw it to a bank account. At the moment, this feature is only available in Nigeria.
     * @param options An object containing the account number, amount and bank id.
     * - bank: The global ID of the bank you want to pay to. You can retrieve a list of banks within any supported
     *  country with the banks query. @see Banks#getBanks for implementation.
       - amountUsd: The USD amount you want to be converted to local currency and paid into a bank account
       - accountNumber: The account number of the bank account you want the withdrawal to be paid into.
     * @returns void
     * @note When the withdrawal has been successfully completed or failed, we'll send you a webhook update
     *
     * For more information, see {@link https://docs.cashramp.co/cashramp/cashramp-api/withdraw-to-bank#how-to-withdraw-to-a-bank-account} for details.
     */
    withdrawToBank(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { accountNumber, amountUsd, bank } = options;
            const query = `
        mutation {
            withdrawToBank(
                bank: "${bank}",
                amountUsd: ${amountUsd},
                accountNumber: "${accountNumber}"
            ) {
                id
                reference
            }
        }
        `;
            return yield this.postRequest("withdrawToBank", query);
        });
    }
    /**
     *
     * @param options An object with:
     * - address: The wallet address you want to withdraw into,
     * - amountUsd: The USD amount you want to withdraw from your Cashramp balance.
     * @note Please note that this mutation will return an error if:
     * - The destination wallet address is invalid.
     * - The amount is less than the minimum of $10
     *
     * You will receive a webhook event when the status of the onchain transaction changes.
     *
     * For more information, see {@link https://docs.cashramp.co/cashramp/cashramp-api/withdraw-onchain#how-to-withdraw-to-a-wallet-address} for details.
     */
    withdrawToWallet(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const { walletAddress, amountUsd } = options;
            const query = `
        mutation {
            withdrawOnchain(
                address: "${walletAddress}",
                amountUsd: ${amountUsd},
            ) {
                id
            }
        }
        `;
            return yield this.postRequest("withdrawOnchain", query);
        });
    }
}
exports.default = Withdrawal;
//# sourceMappingURL=withdraw.js.map