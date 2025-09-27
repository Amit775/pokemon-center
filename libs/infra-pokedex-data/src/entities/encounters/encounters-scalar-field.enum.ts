import { registerEnumType } from '@nestjs/graphql';

export enum EncountersScalarFieldEnum {
    id = "id",
    version_id = "version_id",
    location_area_id = "location_area_id",
    encounter_slot_id = "encounter_slot_id",
    pokemon_id = "pokemon_id",
    min_level = "min_level",
    max_level = "max_level"
}


registerEnumType(EncountersScalarFieldEnum, { name: 'EncountersScalarFieldEnum', description: undefined })
