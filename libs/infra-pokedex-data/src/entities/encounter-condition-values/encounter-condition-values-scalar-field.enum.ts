import { registerEnumType } from '@nestjs/graphql';

export enum EncounterConditionValuesScalarFieldEnum {
    id = "id",
    encounter_condition_id = "encounter_condition_id",
    identifier = "identifier",
    is_default = "is_default"
}


registerEnumType(EncounterConditionValuesScalarFieldEnum, { name: 'EncounterConditionValuesScalarFieldEnum', description: undefined })
