import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidationOptions, ValidatorConstraint, registerDecorator } from "class-validator";
import { PrismaService } from "src/prisma.service";
import { UsersService } from "src/users/users.service";

@ValidatorConstraint({ async: true })
@Injectable()
export class UniqueEmailValidator {
    constructor(private readonly usersService: UsersService) {}

    async validate(email: string, args: ValidationArguments): Promise<boolean> {
        try {
            const user = await this.usersService.findByUserEmail(email);
            return !user;
        } catch (error) {
            console.error('Error validating email:', error);
            return false;
        }
    }

    defaultMessage(args: ValidationArguments): string {
        return `Email ${args.value} is already in use.`;
    }
}

export function IsEmailUnique(validationOptions? : ValidationOptions){
    return function (object: any, propertyName: string) {
        registerDecorator({
          target: object.constructor,
          propertyName: propertyName,
          options: validationOptions,
          constraints: [],
          validator: UniqueEmailValidator,
        });
      };
}