import { IsEmail, IsNotEmpty, Length } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  name: string;

  @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
  @Length(3, 100, { message: 'El nombre de usuario debe tener entre 3 y 100 caracteres' })
  username: string;

  @IsEmail({}, { message: 'El email debe ser válido' })
  email: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
  password: string;
}
