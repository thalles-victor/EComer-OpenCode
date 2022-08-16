import type { User } from '@prisma/client';

export interface IUserEntity {
  id: string;
  name: string;
  email: string;
  photo: string;
  password: string;
  rule: string | null;
}
