import { IUserDTO } from '../../../../auth/Core/DTOs/IUserDTO';
import { IUserEntity } from '../../../../auth/Core/Entities/IUserEntity';

export interface IUserRepository {
  register(user: IUserDTO): Promise<boolean>;
  getAll(): Promise<IUserEntity[]>;
  getById(id: string): Promise<IUserEntity>;
  getByEmail(email: string): Promise<IUserEntity>;
}
