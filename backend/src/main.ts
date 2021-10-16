import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

// load env vars asap
import "./env";

import { createClient } from "@supabase/supabase-js";
import { ValidationPipe } from "@nestjs/common";

const supabaseUrl = process.env.SUPABASE_URL ?? "xxx";
const supabaseKey = process.env.SUPABASE_SERVICE_KEY ?? "xxx";
export const supabase = createClient(supabaseUrl, supabaseKey);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle("sauntimo.org API")
    .setDescription("powering this personal homepage")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
