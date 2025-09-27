import { registerEnumType } from '@nestjs/graphql';

export enum ContestTypesScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(ContestTypesScalarFieldEnum, { name: 'ContestTypesScalarFieldEnum', description: undefined })
