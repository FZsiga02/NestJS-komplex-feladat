/* eslint-disable prettier/prettier */

import { IsDefined } from "class-validator";

export default class CreateOwnerDto {

  @IsDefined({message: 'A név megadása kötelező'})
  fullName: string;

  @IsDefined({message: 'A tulajdonos típusa megadása kötelező'})
  business: boolean;

}
