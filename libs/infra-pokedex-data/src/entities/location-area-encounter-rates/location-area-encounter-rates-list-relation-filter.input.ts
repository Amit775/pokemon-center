import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';

@InputType()
export class LocationAreaEncounterRatesListRelationFilter {

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    every?: Identity<LocationAreaEncounterRatesWhereInput>;

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    some?: Identity<LocationAreaEncounterRatesWhereInput>;

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    none?: Identity<LocationAreaEncounterRatesWhereInput>;
}
