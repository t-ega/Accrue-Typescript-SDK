import { IBanks } from "../types";
import EndpointsBase from "./base";

export default class Banks extends EndpointsBase {
    /**
     * 
     * @param {string} country_code The two letter country code you want to get the banks for. e.g NG
     * @see Countries#countries to get all the supported country codes
     * @returns {IBanks[]} A list of bank objects
     */
    public async getBanks(country_code: string){
        const query = `query {
            banks(countryCode: "${country_code}") {
                id
                name
                code
            }
        }`

        return await this.postRequest<IBanks[]>("banks", query);
    }
}

