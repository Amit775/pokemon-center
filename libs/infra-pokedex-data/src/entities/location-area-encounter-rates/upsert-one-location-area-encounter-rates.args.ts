import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesCreateInput } from './location-area-encounter-rates-create.input';
import { LocationAreaEncounterRatesUpdateInput } from './location-area-encounter-rates-update.input';

@ArgsType()
export class UpsertOneLocationAreaEncounterRatesArgs {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => LocationAreaEncounterRatesCreateInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesCreateInput)
    create!: LocationAreaEncounterRatesCreateInput;

    @Field(() => LocationAreaEncounterRatesUpdateInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesUpdateInput)
    update!: LocationAreaEncounterRatesUpdateInput;
}
