"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baseApi_1 = require("../baseApi");
const accrue = new baseApi_1.Accrue(null);
accrue.account.getAccountDetails().then((res) => console.log(res.accountBalance, res.id, res.depositAddress));
//# sourceMappingURL=account.js.map