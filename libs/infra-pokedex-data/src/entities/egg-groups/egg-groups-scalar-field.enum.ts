import { registerEnumType } from '@nestjs/graphql';

export enum EggGroupsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(EggGroupsScalarFieldEnum, { name: 'EggGroupsScalarFieldEnum', description: undefined })
