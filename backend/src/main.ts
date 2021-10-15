// import { supabase } from "./database/supabase";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

import "./env";

// console.log(JSON.stringify(process.env, undefined, 2));

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL ?? "xxx";
const supabaseKey = process.env.SUPABASE_SERVICE_KEY ?? "xxx";
export const supabase = createClient(supabaseUrl, supabaseKey);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
}
bootstrap();
