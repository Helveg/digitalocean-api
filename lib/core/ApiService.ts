import { OpenAPI, OpenAPIConfig } from "./OpenAPI";

export class ApiService {
  protected client: OpenAPIConfig;
  constructor(clientOrToken?: OpenAPIConfig | string) {
    if (typeof clientOrToken === "string") {
      this.reclient();
      this.setToken(clientOrToken);
    } else {
      this.reclient(clientOrToken);
    }
  }

  reclient(client?: OpenAPIConfig) {
    this.client = { ...(client ?? OpenAPI) };
  }

  setToken(token: string) {
    this.client.TOKEN = token;
  }
}
