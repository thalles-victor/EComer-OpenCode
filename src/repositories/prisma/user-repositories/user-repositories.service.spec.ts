import { Test, TestingModule } from '@nestjs/testing';
import { UserRepositoriesService } from './user-repositories.service';

describe('UserRepositoriesService', () => {
  let service: UserRepositoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRepositoriesService],
    }).compile();

    service = module.get<UserRepositoriesService>(UserRepositoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
