import type { ConfigType } from "@nestjs/config";
import type { NestFastifyApplication } from "@nestjs/platform-fastify";

import { fastifyHelmet } from "@fastify/helmet";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { randomUUID } from "node:crypto";

import { Application } from "./application.js";
import { httpConfig } from "./config/http.config.js";

const app = await NestFactory.create<NestFastifyApplication>(
  Application,
  new FastifyAdapter({
    ignoreTrailingSlash: true,
    genReqId: () => randomUUID(),
  }),
  { cors: true },
);

// See https://docs.nestjs.com/security/helmet#use-with-fastify
await app.register(fastifyHelmet, {
  contentSecurityPolicy: {
    directives: {
      ...fastifyHelmet.contentSecurityPolicy.getDefaultDirectives(),
    },
  },
  crossOriginOpenerPolicy: { policy: "unsafe-none" },
});

const { host, port } = app.get<ConfigType<typeof httpConfig>>(httpConfig.KEY);

await app.listen(port, host);
