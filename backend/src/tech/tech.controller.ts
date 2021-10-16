import { ApiResponse } from "./../../../shared/types.d";
import { Controller, Get } from "@nestjs/common";
import { TechService } from "./tech.service";
import { Tech } from "./tech";

@Controller("tech")
export class TechController {
  constructor(private readonly techService: TechService) {}

  @Get()
  getAllTech(): Promise<ApiResponse<Tech[]>> {
    console.log("Hit /tech/");
    return this.techService.getAllTech();
  }
}
