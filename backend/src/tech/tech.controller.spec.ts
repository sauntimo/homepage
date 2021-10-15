import { Test, TestingModule } from "@nestjs/testing";
import { TechController } from "./tech.controller";

describe("TechController", () => {
  let controller: TechController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TechController],
    }).compile();

    controller = module.get<TechController>(TechController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
