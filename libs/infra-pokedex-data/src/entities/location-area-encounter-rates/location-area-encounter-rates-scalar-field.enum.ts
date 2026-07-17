import { registerEnumType } from '@nestjs/graphql';

export enum LocationAreaEncounterRatesScalarFieldEnum {
    location_area_id = "location_area_id",
    encounter_method_id = "encounter_method_id",
    version_id = "version_id",
    rate = "rate"
}


registerEnumType(LocationAreaEncounterRatesScalarFieldEnum, { name: 'LocationAreaEncounterRatesScalarFieldEnum', description: undefined })
