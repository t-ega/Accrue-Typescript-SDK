import { AxiosResponse } from 'axios';
export interface SdkOptions {
    errorHandler?: IErrorHandler;
    deserializer?: IResponseDeserializer;
    responseValidator?: IResponseValidation;
}
export interface SdkConfiguration extends SdkOptions {
    errorHandler: IErrorHandler;
    deserializer: IResponseDeserializer;
    responseValidator: IResponseValidation;
}
export interface IErrorHandler {
    handleErrors(error: any): Promise<boolean>;
}
export interface IResponseValidation {
    validateResponse: (response: AxiosResponse) => Promise<any | null>;
}
export interface IResponseDeserializer {
    deserialize<TReturnType>(action: string, response: AxiosResponse): Promise<TReturnType>;
}
export interface HostedPayment {
    id: string;
    hostedLink: string;
    status: 'created' | 'picked_up' | 'completed' | "canceled";
}
export interface AvailableCountries {
    id: string;
    name: string;
    code: string;
}
export interface IMarketRate {
    depositRate: number;
    withdrawalRate: number;
}
export interface IBanks {
    id: string;
    name: string;
    code: string;
}
export interface IPaymentMethodTypes {
    id: string;
    identifier: string;
    label: string;
}
export interface IPaymentRequest {
    id: string;
    paymentType: string;
    hostedLink: string;
    amount: number;
    currency: string;
    reference: string;
    status: string;
}
export interface IAccount {
    id: string;
    accountBalance: number | null;
    depositAddress: string | null;
}
export type HostedPaymentOptions = {
    payment_type: "withdrawal" | "deposit";
    amount: number;
    currency?: string;
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    reference?: string;
    redirectUrl?: string;
};
export interface ICustomer {
    email: string;
    firstname: string;
    lastname: string;
    country: string;
}
export interface IGetCustomer {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    country: string;
}
export interface ICustomerResponse {
    merchantCustomers: {
        nodes: {
            id: string;
            email: string;
            firstname: string;
            lastname: string;
        }[];
        pageInfo: {
            startCursor: string;
            endCursor: string;
            hasNextPage: boolean;
            hasPreviousPage: boolean;
        };
    };
}
export interface IBankWithdrawal {
    bank: string;
    amountUsd: number;
    accountNumber: string;
}
export interface IWalletWithdrawal {
    walletAddress: string;
    amountUsd: number;
}
