import { Accrue } from "../baseApi";

const accrue = new Accrue();

accrue.p2pPayment.paymentMethodTypes("VHlwZXM6OkNvdW50cnktZjZmZjQyZTMtZTVmMi00MzkzLTk3NTYtZmFhYTAzYjZhZjUx").then((res) => console.log(res))