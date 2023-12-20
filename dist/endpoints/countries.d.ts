import { AvailableCountries } from "../types";
import EndpointsBase from "./base";
export default class Countries extends EndpointsBase {
    /**
     *
     * @returns {AvailableCountries[]} A list of available countries with their id, name and code
     */
    getCountries(): Promise<AvailableCountries[]>;
}
