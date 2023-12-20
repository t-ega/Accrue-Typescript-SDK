import { IBankWithdrawal, IWalletWithdrawal } from "../types";
import EndpointsBase from "./base";

export default class Withdrawal extends EndpointsBase {
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
    public async withdrawToBank (options: IBankWithdrawal){
        const {accountNumber, amountUsd, bank} = options;
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
        `
        return await this.postRequest<void>("withdrawToBank", query);
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

    public async withdrawToWallet(options: IWalletWithdrawal){
        const {walletAddress, amountUsd} = options;

        const query = `
        mutation {
            withdrawOnchain(
                address: "${walletAddress}",
                amountUsd: ${amountUsd},
            ) {
                id
            }
        }
        `
        return await this.postRequest<IWalletWithdrawal>("withdrawOnchain", query);
    }
}