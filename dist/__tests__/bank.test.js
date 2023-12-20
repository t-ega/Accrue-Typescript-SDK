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
const banks_1 = __importDefault(require("../endpoints/banks"));
// Mock the axiosInstance to avoid actual network requests
jest.mock('axios');
describe('Banks Endpoint', () => {
    let accrue;
    let banks;
    beforeEach(() => {
        accrue = new baseApi_1.Accrue();
        banks = new banks_1.default(accrue);
    });
    it('should get banks for a valid country code', () => __awaiter(void 0, void 0, void 0, function* () {
        // Mock the response you expect from the API
        const mockApiResponse = [
            { id: '1', name: 'Bank A', code: 'A' },
            { id: '2', name: 'Bank B', code: 'B' },
        ];
        // Mock the makeRequest method to return the mockApiResponse
        accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
        // Call the method being tested
        const result = yield banks.getBanks('NG');
        // Assert the result
        expect(result).toEqual([
            { id: '1', name: 'Bank A', code: 'A' },
            { id: '2', name: 'Bank B', code: 'B' },
        ]);
        // Verify that makeRequest was called with the correct parameters
        expect(accrue.makeRequest).toHaveBeenCalledWith('banks', expect.objectContaining({
            query: expect.stringContaining('query'),
        }));
    }));
});
//# sourceMappingURL=bank.test.js.map