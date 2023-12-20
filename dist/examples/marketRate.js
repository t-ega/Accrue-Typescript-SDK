"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApi_1 = require("../baseApi");
const accrue = new baseApi_1.Accrue(null);
accrue.marketRate.getMarketRate("NG").then((res) => console.log(res.depositRate, res.withdrawalRate));
//# sourceMappingURL=marketRate.js.map