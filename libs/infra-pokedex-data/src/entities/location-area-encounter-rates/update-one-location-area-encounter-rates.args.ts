import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesUpdateInput } from './location-area-encounter-rates-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';

@ArgsType()
export class UpdateOneLocationAreaEncounterRatesArgs {

    @Field(() => LocationAreaEncounterRatesUpdateInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesUpdateInput)
    data!: LocationAreaEncounterRatesUpdateInput;

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;
}
