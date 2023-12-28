import { OpenAPIConfig } from "./OpenAPI";

export class ApiService {
  constructor(protected client: OpenAPIConfig) {}

  reclient(client: OpenAPIConfig) {
    this.client = { ...client };
  }

  setToken(token: string) {
    this.client.TOKEN = token;
  }
}
