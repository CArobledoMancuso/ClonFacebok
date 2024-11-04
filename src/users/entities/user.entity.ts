import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';
  
  @Entity('users')
  export class User {
    @PrimaryGeneratedColumn()
    user_id: number;
  
    @Column({ type: 'varchar', length: 255 })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    name: string;
  
    @Column({ type: 'varchar', length: 100, unique: true })
    @IsNotEmpty({ message: 'El nombre de usuario es obligatorio' })
    @Length(3, 100, { message: 'El nombre de usuario debe tener entre 3 y 100 caracteres' })
    username: string;
  
    @Column({ type: 'varchar', length: 255, unique: true })
    @IsEmail({}, { message: 'El email debe ser válido' })
    email: string;
  
    @Column({ type: 'text' })
    @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    password_hash: string;
  
    @Column({ type: 'varchar', length: 500, nullable: true })
    @IsOptional()
    profile_picture: string;
  
    @Column({ type: 'text', nullable: true })
    @IsOptional()
    bio: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;
  
    @DeleteDateColumn()
    deleted_at?: Date;
  }
  