import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {
  EUserRole,
  IPrivateUserData,
  BridgeUserData,
} from "../shared/data/userData/userDataInterface";

interface IUserEntity extends IPrivateUserData, BridgeUserData {}

@Entity({ name: "users" })
export class UserEntity implements IUserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({
    type: "enum",
    enum: EUserRole,
    default: EUserRole.BASIC,
  })
  role: EUserRole;
  @Column()
  email: string;
  @Column()
  hashedPassword: string;

  @Column()
  passwordSalt: string;
}
