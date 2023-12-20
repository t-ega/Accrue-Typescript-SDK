import { SdkOptions } from './types';
import HostedPayments from './endpoints/hostedPayment';
import Banks from './endpoints/banks';
import MarketRate from './endpoints/marketRate';
import PaymentMethodsTypes from './endpoints/paymentMethodTypes';
import Account from './endpoints/account';
import Countries from './endpoints/countries';
import Customer from './endpoints/customers';
import PaymentRequests from './endpoints/paymentRequests';
import Withdrawal from './endpoints/withdraw';
export declare class Accrue {
    private static rootUrl;
    private sdkConfig;
    private secretKey?;
    hostedPayment: HostedPayments;
    bank: Banks;
    marketRate: MarketRate;
    p2pPayment: PaymentMethodsTypes;
    account: Account;
    countries: Countries;
    customers: Customer;
    paymentRequst: PaymentRequests;
    withdraw: Withdrawal;
    private axiosInstance;
    constructor(config?: SdkOptions | null, secretKey?: string);
    makeRequest<TReturnType>(action: string, payload?: any): Promise<TReturnType>;
    private initializeSdk;
}
