import { Accrue } from "../baseApi";

const accrue = new Accrue();

accrue.countries.getCountries().then((res) => console.log(res[0].name, res[0].id, res[0].code))