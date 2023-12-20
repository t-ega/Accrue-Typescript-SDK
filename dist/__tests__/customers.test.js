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
const baseApi_1 = require("../baseApi");
const customers_1 = __importDefault(require("../endpoints/customers"));
// Mock the axiosInstance to avoid actual network requests
jest.mock('axios');
describe('Customer Endpoint', () => {
    let accrue;
    let customer;
    beforeEach(() => {
        accrue = new baseApi_1.Accrue();
        customer = new customers_1.default(accrue);
    });
    it('should create a customer successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const options = {
            email: 'test@example.com',
            firstname: 'John',
            lastname: 'Doe',
            country: 'US',
        };
        const mockApiResponse = {
            id: '123',
            email: 'test@example.com',
            firstName: 'John',
            lastName: 'Doe',
        };
        accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
        const result = yield customer.createCustomer(options);
        expect(result).toEqual({
            id: '123',
            email: 'test@example.com',
            firstName: 'John',
            lastName: 'Doe',
        });
        expect(accrue.makeRequest).toHaveBeenCalledWith('createCustomer', expect.objectContaining({
            query: expect.stringContaining('mutation'),
        }));
    }));
    it('should get all customers successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockApiResponse = {
            merchantCustomers: {
                nodes: [
                    { id: '1', email: 'customer1@example.com', firstName: 'Alice', lastName: 'Smith' },
                    { id: '2', email: 'customer2@example.com', firstName: 'Bob', lastName: 'Johnson' },
                ],
                pageInfo: {
                    startCursor: 'startCursor',
                    endCursor: 'endCursor',
                    hasNextPage: false,
                    hasPreviousPage: false,
                },
            },
        };
        accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
        const result = yield customer.getAllCustomers();
        expect(result).toEqual(expect.objectContaining({
            merchantCustomers: {
                nodes: expect.arrayContaining([
                    { id: '1', email: 'customer1@example.com', firstName: 'Alice', lastName: 'Smith' },
                    { id: '2', email: 'customer2@example.com', firstName: 'Bob', lastName: 'Johnson' },
                ]),
                pageInfo: expect.any(Object),
            },
        }));
        expect(accrue.makeRequest).toHaveBeenCalledWith('account', expect.objectContaining({
            query: expect.stringContaining('query'),
        }));
    }));
    it('should get a specific customer successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const customerId = '123';
        const mockApiResponse = {
            id: '123',
            email: 'test@example.com',
            firstName: 'John',
            lastName: 'Doe',
        };
        accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
        const result = yield customer.getCustomer(customerId);
        expect(result).toEqual({
            id: '123',
            email: 'test@example.com',
            firstName: 'John',
            lastName: 'Doe',
        });
        expect(accrue.makeRequest).toHaveBeenCalledWith('node', expect.objectContaining({
            query: expect.stringContaining('query'),
        }));
    }));
});
//# sourceMappingURL=customers.test.js.map