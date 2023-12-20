import type { IErrorHandler } from "../types.js";

export default class NoOpErrorHandler implements IErrorHandler {
    public async handleErrors(_: any): Promise<boolean> {
        return false;
    }
}