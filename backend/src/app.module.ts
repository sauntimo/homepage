import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
// import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { TechService } from "./tech/tech.service";
import { TechModule } from "./tech/tech.module";

@Module({
  // imports: [AuthModule, UsersModule, TechModule],
  imports: [UsersModule, TechModule],
  controllers: [AppController],
  providers: [AppService, TechService],
})
export class AppModule {}
