import { registerEnumType } from '@nestjs/graphql';

export enum GendersScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(GendersScalarFieldEnum, { name: 'GendersScalarFieldEnum', description: undefined })
