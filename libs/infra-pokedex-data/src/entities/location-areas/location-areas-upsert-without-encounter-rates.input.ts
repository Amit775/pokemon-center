import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasUpdateWithoutEncounterRatesInput } from './location-areas-update-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateWithoutEncounterRatesInput } from './location-areas-create-without-encounter-rates.input';
import { LocationAreasWhereInput } from './location-areas-where.input';

@InputType()
export class LocationAreasUpsertWithoutEncounterRatesInput {

    @Field(() => LocationAreasUpdateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => LocationAreasUpdateWithoutEncounterRatesInput)
    update!: Identity<LocationAreasUpdateWithoutEncounterRatesInput>;

    @Field(() => LocationAreasCreateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutEncounterRatesInput)
    create!: Identity<LocationAreasCreateWithoutEncounterRatesInput>;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: Identity<LocationAreasWhereInput>;
}
