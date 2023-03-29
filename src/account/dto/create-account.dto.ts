/* eslint-disable prettier/prettier */

import { IsDefined } from "class-validator";

export default class CreateAccount {

  @IsDefined({message: 'A bankszámlaszám megadása kötelező'})
  accountNumber: string;

  @IsDefined({message: 'Az egyenleg megadása kötelező'})
  balance: number;

}
