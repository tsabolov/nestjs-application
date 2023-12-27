import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { baseConfig } from "./config/base.config.js";
import { httpConfig } from "./config/http.config.js";
import { validationSchema } from "./config/validation.js";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, httpConfig],
      cache: true,
      expandVariables: true,
      validationSchema,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
})
export class Application {}
