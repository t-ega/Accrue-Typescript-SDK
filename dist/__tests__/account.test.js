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
const account_1 = __importDefault(require("../endpoints/account"));
jest.mock('axios');
describe('Account Endpoint', () => {
    let accrue;
    let account;
    beforeEach(() => {
        accrue = new baseApi_1.Accrue();
        account = new account_1.default(accrue);
    });
    it('should get account details successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockApiResponse = {
            id: '123',
            accountBalance: 1000,
            depositAddress: 'xyz123',
        };
        accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
        const result = yield account.getAccountDetails();
        expect(result).toEqual({
            id: '123',
            accountBalance: 1000,
            depositAddress: 'xyz123',
        });
        // Assert that makeRequest was called with an argument containing at least {query: "query"}
        expect(accrue.makeRequest).toHaveBeenCalledWith('account', expect.objectContaining({
            query: expect.stringContaining('query'),
        }));
    }));
    it('should handle API error', () => __awaiter(void 0, void 0, void 0, function* () {
        accrue.makeRequest = jest.fn().mockRejectedValue(new Error('API error'));
        try {
            yield account.getAccountDetails();
            fail('Expected an error to be thrown');
        }
        catch (error) {
            expect(error.message).toBe('API error');
        }
    }));
});
//# sourceMappingURL=account.test.js.map