import { Accrue } from "../baseApi";

const accrue = new Accrue();

accrue.account.getAccountDetails().then((res) => console.log(res.accountBalance, res.id, res.depositAddress))