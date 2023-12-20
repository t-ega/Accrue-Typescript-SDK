import type { IResponseValidation } from "../types.js";
import {AxiosResponse} from "axios";

export default class DefaultResponseValidator implements IResponseValidation {
    public async validateResponse(response: AxiosResponse): Promise<void> {

        if (response.status == 200) {

            if (response.data.errors) {
              throw new Error(response.data.errors[0].message);
            }
        }
        else {
            throw new Error(response.statusText)
        }
    }
}