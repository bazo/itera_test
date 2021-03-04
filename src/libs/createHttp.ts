import { HttpClient } from "@bazo/fetch-client";

export const createHttp = (baseURL: string): HttpClient => {
	return new HttpClient(baseURL);
};
