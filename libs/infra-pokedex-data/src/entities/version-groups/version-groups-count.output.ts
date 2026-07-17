import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class VersionGroupsCount {

    @Field(() => Int, {nullable:false})
    versions?: number;

    @Field(() => Int, {nullable:false})
    encounterSlots?: number;

    @Field(() => Int, {nullable:false})
    machines?: number;

    @Field(() => Int, {nullable:false})
    versionGroupPokemonMoveMethods?: number;

    @Field(() => Int, {nullable:false})
    versionGroupRegions?: number;

    @Field(() => Int, {nullable:false})
    pokedexVersionGroups?: number;

    @Field(() => Int, {nullable:false})
    pokemonMoves?: number;

    @Field(() => Int, {nullable:false})
    pokemonForms?: number;
}
