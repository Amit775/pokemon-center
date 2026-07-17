import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreasWhereInput } from './location-areas-where.input';
import { Type } from 'class-transformer';
import { LocationAreasUpdateWithoutEncounterRatesInput } from './location-areas-update-without-encounter-rates.input';

@InputType()
export class LocationAreasUpdateToOneWithWhereWithoutEncounterRatesInput {

    @Field(() => LocationAreasWhereInput, {nullable:true})
    @Type(() => LocationAreasWhereInput)
    where?: Identity<LocationAreasWhereInput>;

    @Field(() => LocationAreasUpdateWithoutEncounterRatesInput, {nullable:false})
    @Type(() => LocationAreasUpdateWithoutEncounterRatesInput)
    data!: Identity<LocationAreasUpdateWithoutEncounterRatesInput>;
}
