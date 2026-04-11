import { htmlLanguage } from "./language";
import { httpMethod } from "./method";
import { httpResponse } from "./response";

export { htmlLanguage, httpMethod, httpResponse };

/**
 * HTTP Method Type
 *
 * It has all the valid values of HTTP methods
 */
export type HttpMethod = keyof typeof httpMethod;
