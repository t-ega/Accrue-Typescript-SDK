import { SdkConfiguration, SdkOptions } from './types';
import NoOpErrorHandler from './errorhandling/NoOpErrorHandler';
import dotenv from 'dotenv';
import DefaultResponseValidator from './responsevalidation/DefaultResponseValidation';
import DefaultResponseDeserializer from './serialization/DefaultResponseSerializer';
import HostedPayments from './endpoints/hostedPayment';
import Banks from './endpoints/banks';
import MarketRate from './endpoints/marketRate';
import PaymentMethodsTypes from './endpoints/paymentMethodTypes';
import axios, { AxiosInstance } from 'axios';
import Account from './endpoints/account';
import Countries from './endpoints/countries';
import Customer from './endpoints/customers';
import PaymentRequests from './endpoints/paymentRequests';
import Withdrawal from './endpoints/withdraw';

dotenv.config();

export class Accrue {
    
    private static rootUrl: string = "https://api.useaccrue.com/cashramp/api/graphql";
    private sdkConfig: SdkConfiguration;
    private secretKey?: string;
    public hostedPayment: HostedPayments;
    public bank: Banks;
    public marketRate: MarketRate;
    public p2pPayment: PaymentMethodsTypes;
    public account: Account;
    public countries: Countries;
    public customers : Customer;
    public paymentRequst : PaymentRequests;
    public withdraw : Withdrawal;
    private axiosInstance: AxiosInstance;

    public constructor(config?: SdkOptions | null, secretKey?: string){
        this.sdkConfig = this.initializeSdk(config);
        this.secretKey = secretKey ?? process.env.ACCURE_SECRET_KEY;
        this.hostedPayment = new HostedPayments(this);
        this.bank = new Banks(this);
        this.marketRate = new MarketRate(this);
        this.p2pPayment = new PaymentMethodsTypes(this);
        this.account = new Account(this);
        this.countries = new Countries(this);
        this.paymentRequst = new PaymentRequests(this);
        this.customers = new Customer(this);
        this.withdraw = new Withdrawal(this);


        if (!this.secretKey){
            throw new Error("Accrue Secret key is not defined in environment varaible or passed in as a string")
        }

        this.axiosInstance =  axios.create({
            baseURL: Accrue.rootUrl,
            headers: { Authorization: `Bearer ${this.secretKey}` },
        });
        

    }

    public async makeRequest<TReturnType>(action:string, payload: any = undefined): Promise<TReturnType> {
        const response =  await this.axiosInstance.post("", payload)
        .catch(err => {
            throw new Error(`${err.message}, Body: ${err.response.statusText}`)
        });

        await this.sdkConfig.responseValidator.validateResponse(response);
        return this.sdkConfig.deserializer.deserialize<TReturnType>(action, response);          
    }

    private initializeSdk(config: SdkOptions | undefined | null): SdkConfiguration {
        const defaultConfig: SdkConfiguration = {
            errorHandler: new NoOpErrorHandler(),
            responseValidator: new DefaultResponseValidator(),
            deserializer: new DefaultResponseDeserializer()
        }
        

        return { ...defaultConfig, ...config };
    }
}