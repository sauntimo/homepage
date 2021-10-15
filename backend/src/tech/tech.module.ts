import { Module } from "@nestjs/common";
import { TechController } from "./tech.controller";
import { TechService } from "./tech.service";

@Module({
  controllers: [TechController],
  providers: [TechService],
})
export class TechModule {}
