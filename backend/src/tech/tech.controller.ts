import { ApiResponse } from "./../../../shared/types.d";
import { Body, Controller, Get, Post } from "@nestjs/common";
import { TechService } from "./tech.service";
import { Tech } from "./tech";

@Controller("tech")
export class TechController {
  constructor(private readonly techService: TechService) {}

  @Get()
  getAllTech(): Promise<ApiResponse<Tech[]>> {
    return this.techService.getAllTech();
  }

  @Post()
  createTech(@Body() newTech: Tech): Promise<ApiResponse<never>> {
    return this.techService.createTech(newTech);
  }
}
