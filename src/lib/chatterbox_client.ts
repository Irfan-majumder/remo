import createClient from "openapi-fetch";
import { env } from "./env";

type ChatterboxPaths = Record<string, { post: unknown }>;

export const chatterbox = createClient<ChatterboxPaths>({
  baseUrl: env.CHATTERBOX_API_URL,
  headers: {
    "x-api-key": env.CHATTERBOX_API_KEY,
  },
});