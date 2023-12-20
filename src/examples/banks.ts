import { Accrue } from "../baseApi";

const accrue = new Accrue(null);

accrue.bank.getBanks("NG").then((res) => console.log(res))