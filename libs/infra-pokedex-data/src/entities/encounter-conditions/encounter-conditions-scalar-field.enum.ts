import { registerEnumType } from '@nestjs/graphql';

export enum EncounterConditionsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(EncounterConditionsScalarFieldEnum, { name: 'EncounterConditionsScalarFieldEnum', description: undefined })
