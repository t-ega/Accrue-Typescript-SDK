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
Object.defineProperty(exports, "__esModule", { value: true });
class EndpointsBase {
    constructor(api) {
        this.api = api;
    }
    /**
     *
     * @param {string } action The name of the data to get from the API result
     * @param {unknown} query The body of the request either a mutation or a query
     * @returns {Promise} An awaitable promise which resolves and returns an object
     */
    postRequest(action, query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.api.makeRequest(action, { query });
        });
    }
}
exports.default = EndpointsBase;
//# sourceMappingURL=base.js.map