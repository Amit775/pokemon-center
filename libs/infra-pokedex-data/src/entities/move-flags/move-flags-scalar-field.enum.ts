import { registerEnumType } from '@nestjs/graphql';

export enum MoveFlagsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(MoveFlagsScalarFieldEnum, { name: 'MoveFlagsScalarFieldEnum', description: undefined })
