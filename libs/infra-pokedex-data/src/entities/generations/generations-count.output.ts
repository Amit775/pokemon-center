import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GenerationsCount {

    @Field(() => Int, {nullable:false})
    pokemonSpecies?: number;

    @Field(() => Int, {nullable:false})
    moves?: number;

    @Field(() => Int, {nullable:false})
    types?: number;

    @Field(() => Int, {nullable:false})
    abilities?: number;

    @Field(() => Int, {nullable:false})
    pokemonFormGenerations?: number;

    @Field(() => Int, {nullable:false})
    itemGameIndices?: number;

    @Field(() => Int, {nullable:false})
    typeGameIndices?: number;

    @Field(() => Int, {nullable:false})
    locationGameIndices?: number;

    @Field(() => Int, {nullable:false})
    versionGroups?: number;
}
