import { registerEnumType } from '@nestjs/graphql';

export enum EncounterConditionValueMapScalarFieldEnum {
    encounter_id = "encounter_id",
    encounter_condition_value_id = "encounter_condition_value_id"
}


registerEnumType(EncounterConditionValueMapScalarFieldEnum, { name: 'EncounterConditionValueMapScalarFieldEnum', description: undefined })
