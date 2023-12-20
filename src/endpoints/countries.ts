import { AvailableCountries } from "../types";
import EndpointsBase from "./base";

export default class Countries extends EndpointsBase{
    /**
     * 
     * @returns {AvailableCountries[]} A list of available countries with their id, name and code
     */
    public async getCountries(){
        const query = `
        query {
            availableCountries {
                id
                name
                code
            }
        }`

        return await this.postRequest<AvailableCountries[]>("availableCountries", query);
    }
}