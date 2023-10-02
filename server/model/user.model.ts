export class CreateUserDto {
  username: string;
  email: string;
  password: string;
}

export class CreateAccountDto {
  id: string;
  userId: string;
  provider: string;
  provider_account_id: string;
}
