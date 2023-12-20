import { Accrue } from "../baseApi";
import { IBankWithdrawal } from "../types";

const accrue = new Accrue(null);

const details: IBankWithdrawal = {
    accountNumber: "2131645271",
    amountUsd: 100, // NOTE: THIS IS IN USD
    bank: "VHlwZXM6OkJhbmstNDY3NDAyOGMtNDVjYi00N2QwLThlYjYtOWUxZTBhZDMyYzM0" // The id of the bank, if you dont know the id use the banks.getBanks() endpoint
}

const run = async () => {
    const banks = await accrue.bank.getBanks("NG");
    console.log(banks);

    // When the withdrawal has been successfully completed or failed, we'll send you a webhook update
    await accrue.withdraw.withdrawToBank(details);

}

run().then(() => {});

  