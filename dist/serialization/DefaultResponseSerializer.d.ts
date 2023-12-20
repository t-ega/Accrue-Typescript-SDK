import type { IResponseDeserializer } from "../types.js";
import { AxiosResponse } from 'axios';
export default class DefaultResponseDeserializer implements IResponseDeserializer {
    deserialize<TReturnType>(action: string, response: AxiosResponse): Promise<TReturnType>;
}
