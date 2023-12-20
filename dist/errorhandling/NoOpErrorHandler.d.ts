import type { IErrorHandler } from "../types.js";
export default class NoOpErrorHandler implements IErrorHandler {
    handleErrors(_: any): Promise<boolean>;
}
