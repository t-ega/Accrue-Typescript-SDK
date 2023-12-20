"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApi_1 = require("../baseApi");
const accrue = new baseApi_1.Accrue(null);
accrue.countries.getCountries().then((res) => console.log(res[0].name, res[0].id, res[0].code));
//# sourceMappingURL=countries.js.map