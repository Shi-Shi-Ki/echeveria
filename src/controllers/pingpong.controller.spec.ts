import { Test, TestingModule } from '@nestjs/testing';
import { PingpongController } from './pingpong.controller';

describe('PingpongController', () => {
  let controller: PingpongController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PingpongController],
    }).compile();

    controller = module.get<PingpongController>(PingpongController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
