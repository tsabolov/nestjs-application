import Joi from "joi";

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid("production", "development", "test"),

  HTTP_HOST: Joi.string(),
  HTTP_PORT: Joi.number(),
  HTTP_PUBLIC_URL: Joi.string(),
});
