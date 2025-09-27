import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationAreaEncounterRatesWhereInput } from './location-area-encounter-rates-where.input';

@InputType()
export class LocationAreaEncounterRatesListRelationFilter {

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    every?: LocationAreaEncounterRatesWhereInput;

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    some?: LocationAreaEncounterRatesWhereInput;

    @Field(() => LocationAreaEncounterRatesWhereInput, {nullable:true})
    none?: LocationAreaEncounterRatesWhereInput;
}
