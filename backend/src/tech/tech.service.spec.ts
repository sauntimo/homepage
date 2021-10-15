import { Test, TestingModule } from "@nestjs/testing";
import { TechService } from "./tech.service";

describe("TechService", () => {
  let service: TechService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TechService],
    }).compile();

    service = module.get<TechService>(TechService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
