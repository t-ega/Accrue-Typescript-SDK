import { Accrue } from "../baseApi";


export default class EndpointsBase {
    
    constructor(protected api: Accrue) {
    }
    /**
     * 
     * @param {string } action The name of the data to get from the API result
     * @param {unknown} query The body of the request either a mutation or a query
     * @returns {Promise} An awaitable promise which resolves and returns an object
     */
    protected async postRequest<TReturnType, TBody = unknown>(action: string, query: TBody): Promise<TReturnType> {
        return await this.api.makeRequest<TReturnType>(action, {query});
    }
}