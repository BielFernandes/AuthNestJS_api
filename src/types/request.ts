import { User } from '@prisma/client';
import { Request } from 'express';

export interface AuthRequests extends Request {
  user: User;
}
