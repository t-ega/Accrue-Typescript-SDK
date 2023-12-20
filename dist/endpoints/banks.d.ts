import { IBanks } from "../types";
import EndpointsBase from "./base";
export default class Banks extends EndpointsBase {
    /**
     *
     * @param {string} country_code The two letter country code you want to get the banks for. e.g NG
     * @see Countries#countries to get all the supported country codes
     * @returns {IBanks[]} A list of bank objects
     */
    getBanks(country_code: string): Promise<IBanks[]>;
}
