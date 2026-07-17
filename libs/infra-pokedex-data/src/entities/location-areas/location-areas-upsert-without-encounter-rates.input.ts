import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreasUpdateWithoutEncounterRatesInput } from './location-areas-update-without-encounter-rates.input';
import { Type } from 'class-transformer';
import { LocationAreasCreateWithoutEncounterRatesInput } from './location-areas-create-without-encounter-rates.input';
import { LocationAreasWhereInput } from './location-areas-where.input';

@InputType()
export class LocationAreasUpsertWithoutEncounterRatesInput {

    @Field(() => LocationAreasUpdateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => LocationAreasUpdateWithoutEncounterRatesInput)
    update!: LocationAreasUpdateWithoutEncounterRatesInput;

    @Field(() => LocationAreasCreateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => LocationAreasCreateWithoutEncounterRatesInput)
    create!: LocationAreasCreateWithoutEncounterRatesInput;

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: LocationAreasWhereInput;
}
