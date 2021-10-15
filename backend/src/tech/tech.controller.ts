import { ApiResponse } from "./../../../shared/types.d";
import { Controller, Get } from "@nestjs/common";
import { TechService } from "./tech.service";
import { Tech } from "./tech";

@Controller("tech")
export class TechController {
  constructor(private readonly techService: TechService) {}

  @Get()
  getAllTech(): Promise<ApiResponse<Tech[]>> {
    return this.techService.getAllTech();
  }
}
