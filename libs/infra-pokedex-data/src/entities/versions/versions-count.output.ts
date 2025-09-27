import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VersionsCount {

    @Field(() => Int, {nullable:false})
    encounters?: number;

    @Field(() => Int, {nullable:false})
    pokemonItems?: number;

    @Field(() => Int, {nullable:false})
    pokemonGameIndices?: number;

    @Field(() => Int, {nullable:false})
    locationAreaEncounterRates?: number;
}
