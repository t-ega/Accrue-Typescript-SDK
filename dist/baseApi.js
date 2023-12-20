"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Accrue = void 0;
const NoOpErrorHandler_1 = __importDefault(require("./errorhandling/NoOpErrorHandler"));
const dotenv_1 = __importDefault(require("dotenv"));
const DefaultResponseValidation_1 = __importDefault(require("./responsevalidation/DefaultResponseValidation"));
const DefaultResponseSerializer_1 = __importDefault(require("./serialization/DefaultResponseSerializer"));
const hostedPayment_1 = __importDefault(require("./endpoints/hostedPayment"));
const banks_1 = __importDefault(require("./endpoints/banks"));
const marketRate_1 = __importDefault(require("./endpoints/marketRate"));
const paymentMethodTypes_1 = __importDefault(require("./endpoints/paymentMethodTypes"));
const axios_1 = __importDefault(require("axios"));
const account_1 = __importDefault(require("./endpoints/account"));
const countries_1 = __importDefault(require("./endpoints/countries"));
const customers_1 = __importDefault(require("./endpoints/customers"));
const paymentRequests_1 = __importDefault(require("./endpoints/paymentRequests"));
const withdraw_1 = __importDefault(require("./endpoints/withdraw"));
dotenv_1.default.config();
class Accrue {
    constructor(config, secretKey) {
        this.sdkConfig = this.initializeSdk(config);
        this.secretKey = secretKey !== null && secretKey !== void 0 ? secretKey : process.env.ACCURE_SECRET_KEY;
        this.hostedPayment = new hostedPayment_1.default(this);
        this.bank = new banks_1.default(this);
        this.marketRate = new marketRate_1.default(this);
        this.p2pPayment = new paymentMethodTypes_1.default(this);
        this.account = new account_1.default(this);
        this.countries = new countries_1.default(this);
        this.paymentRequst = new paymentRequests_1.default(this);
        this.customers = new customers_1.default(this);
        this.withdraw = new withdraw_1.default(this);
        if (!this.secretKey) {
            throw new Error("Accrue Secret key is not defined in environment varaible or passed in as a string");
        }
        this.axiosInstance = axios_1.default.create({
            baseURL: Accrue.rootUrl,
            headers: { Authorization: `Bearer ${this.secretKey}` },
        });
    }
    makeRequest(action, payload = undefined) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axiosInstance.post("", payload)
                .catch(err => {
                throw new Error(`${err.message}, Body: ${err.response.statusText}`);
            });
            yield this.sdkConfig.responseValidator.validateResponse(response);
            return this.sdkConfig.deserializer.deserialize(action, response);
        });
    }
    initializeSdk(config) {
        const defaultConfig = {
            errorHandler: new NoOpErrorHandler_1.default(),
            responseValidator: new DefaultResponseValidation_1.default(),
            deserializer: new DefaultResponseSerializer_1.default()
        };
        return Object.assign(Object.assign({}, defaultConfig), config);
    }
}
exports.Accrue = Accrue;
Accrue.rootUrl = "https://api.useaccrue.com/cashramp/api/graphql";
//# sourceMappingURL=baseApi.js.map