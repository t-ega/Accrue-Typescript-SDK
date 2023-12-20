import { Accrue } from "../baseApi";

const accrue = new Accrue();

accrue.bank.getBanks("NG").then((res) => console.log(res))