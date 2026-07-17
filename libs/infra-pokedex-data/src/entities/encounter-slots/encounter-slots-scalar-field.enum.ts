import { registerEnumType } from '@nestjs/graphql';

export enum EncounterSlotsScalarFieldEnum {
    id = "id",
    version_group_id = "version_group_id",
    encounter_method_id = "encounter_method_id",
    slot = "slot",
    rarity = "rarity"
}


registerEnumType(EncounterSlotsScalarFieldEnum, { name: 'EncounterSlotsScalarFieldEnum', description: undefined })
