import { registerEnumType } from '@nestjs/graphql';

export enum MoveDamageClassesScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(MoveDamageClassesScalarFieldEnum, { name: 'MoveDamageClassesScalarFieldEnum', description: undefined })
