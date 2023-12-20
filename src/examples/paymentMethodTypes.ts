import { Accrue } from "../baseApi";

const accrue = new Accrue(null);

accrue.p2pPayment.paymentMethodTypes("VHlwZXM6OkNvdW50cnktZjZmZjQyZTMtZTVmMi00MzkzLTk3NTYtZmFhYTAzYjZhZjUx").then((res) => console.log(res))