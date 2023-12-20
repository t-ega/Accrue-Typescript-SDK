import { Accrue } from "../baseApi";

const accrue = new Accrue();

accrue.marketRate.getMarketRate("NG").then((res) => console.log(res.depositRate, res.withdrawalRate))