import type { IResponseDeserializer } from "../types.js";
import { AxiosResponse } from 'axios';

export default class DefaultResponseDeserializer implements IResponseDeserializer {
    public async deserialize<TReturnType>(action: string, response: AxiosResponse): Promise<TReturnType> {
        const text = await response.data.data[action];
        return text as TReturnType
    }
}