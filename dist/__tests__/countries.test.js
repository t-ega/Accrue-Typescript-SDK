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
const countries_1 = __importDefault(require("../endpoints/countries"));
jest.mock('axios');
describe('Countries Endpoint', () => {
    let accrue;
    let countries;
    beforeEach(() => {
        accrue = new baseApi_1.Accrue();
        countries = new countries_1.default(accrue);
    });
    it('should get available countries successfully', () => __awaiter(void 0, void 0, void 0, function* () {
        const mockApiResponse = [
            { id: '1', name: 'Country A', code: 'A' },
            { id: '2', name: 'Country B', code: 'B' },
        ];
        accrue.makeRequest = jest.fn().mockResolvedValue(mockApiResponse);
        const result = yield countries.getCountries();
        expect(result).toEqual([
            { id: '1', name: 'Country A', code: 'A' },
            { id: '2', name: 'Country B', code: 'B' },
        ]);
        expect(accrue.makeRequest).toHaveBeenCalledWith('availableCountries', expect.objectContaining({
            query: expect.stringContaining('query'),
        }));
    }));
});
//# sourceMappingURL=countries.test.js.map