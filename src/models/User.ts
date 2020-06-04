import { Entity } from 'typeorm';

class User {
  id: string;

  name: string;

  email: string;

  created_at: Date;

  updated_at: Date;
}

export default User;
