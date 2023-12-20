import { IMarketRate } from "../types";
import EndpointsBase from "./base";
export default class MarketRate extends EndpointsBase {
    /**
     *
     * @param country_code The two letter country code of the country that you want their market rate.
     * @see Countries#getCountries to get the country code of a country
     * @returns A market Rate object with fields: DepositRate and WithdrawalRate
     *
     * @note This market rate should not be considered as the final rate.
     * The final rate is provided when a user is assigned to an agent and proceeds to initiate a payment.
     */
    getMarketRate(country_code: string): Promise<IMarketRate>;
}
