import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';
import { Type } from 'class-transformer';
import { LocationAreaEncounterRatesOrderByWithRelationInput } from './location-area-encounter-rates-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { LocationAreaEncounterRatesWhereUniqueInput } from './location-area-encounter-rates-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationAreaEncounterRatesScalarFieldEnum } from './location-area-encounter-rates-scalar-field.enum';

@ArgsType()
export class FindFirstLocationAreaEncounterRatesOrThrowArgs {

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    @Type(() => LocationAreaEncounterRatesWhereInput)
    where?: LocationAreaEncounterRatesWhereInput;

    @Field(() => [LocationAreaEncounterRatesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationAreaEncounterRatesOrderByWithRelationInput>;

    @Field(() => LocationAreaEncounterRatesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<LocationAreaEncounterRatesWhereUniqueInput, 'location_area_id_encounter_method_id_version_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocationAreaEncounterRatesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${LocationAreaEncounterRatesScalarFieldEnum}`>;
}
