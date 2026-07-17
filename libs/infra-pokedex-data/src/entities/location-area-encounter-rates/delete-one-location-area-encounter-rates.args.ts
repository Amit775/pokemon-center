import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneLocationAreaEncounterRatesArgs {

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:false})
    @Type(() => LocationAreaEncounterRatesWhereUniqueInput)
    where!: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;
}
