import type { IResponseValidation } from "../types.js";
import { AxiosResponse } from "axios";
export default class DefaultResponseValidator implements IResponseValidation {
    validateResponse(response: AxiosResponse): Promise<void>;
}
