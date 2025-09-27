import { registerEnumType } from '@nestjs/graphql';

export enum EncounterMethodsScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    order = "order"
}


registerEnumType(EncounterMethodsScalarFieldEnum, { name: 'EncounterMethodsScalarFieldEnum', description: undefined })
