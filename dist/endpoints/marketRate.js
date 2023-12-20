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
class MarketRate extends base_1.default {
    /**
     *
     * @param country_code The two letter country code of the country that you want their market rate.
     * @see Countries#getCountries to get the country code of a country
     * @returns A market Rate object with fields: DepositRate and WithdrawalRate
     *
     * @note This market rate should not be considered as the final rate.
     * The final rate is provided when a user is assigned to an agent and proceeds to initiate a payment.
     */
    getMarketRate(country_code) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = `
        query {
            marketRate(countryCode: "${country_code}") {
                depositRate
                withdrawalRate
            }
        }`;
            return yield this.postRequest("marketRate", query);
        });
    }
}
exports.default = MarketRate;
//# sourceMappingURL=marketRate.js.map