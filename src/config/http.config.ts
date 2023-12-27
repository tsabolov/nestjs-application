import { registerAs } from "@nestjs/config";

export const httpConfig = registerAs("http", () => ({
  host: process.env.HTTP_HOST || "0.0.0.0",
  port: Number(process.env.HTTP_PORT) || 8080,
}));
