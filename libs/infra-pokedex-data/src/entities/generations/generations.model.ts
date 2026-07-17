import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Regions } from '../regions/regions.model';
import type { Identity } from 'identity-type';
import { PokemonSpecies } from '../pokemon-species/pokemon-species.model';
import { Moves } from '../moves/moves.model';
import { Types } from '../types/types.model';
import { Abilities } from '../abilities/abilities.model';
import { PokemonFormGenerations } from '../pokemon-form-generations/pokemon-form-generations.model';
import { ItemGameIndices } from '../item-game-indices/item-game-indices.model';
import { TypeGameIndices } from '../type-game-indices/type-game-indices.model';
import { LocationGameIndices } from '../location-game-indices/location-game-indices.model';
import { VersionGroups } from '../version-groups/version-groups.model';
import { GenerationsCount } from './generations-count.output';

/**
 * @@TypeGraphQL.type(name: "Generation")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Generation")'})
export class Generations {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    main_region_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Regions, {nullable:false})
    region?: Identity<Regions>;

    @Field(() => [PokemonSpecies], {nullable:false})
    pokemonSpecies?: Array<PokemonSpecies>;

    @Field(() => [Moves], {nullable:false})
    moves?: Array<Moves>;

    @Field(() => [Types], {nullable:false})
    types?: Array<Types>;

    @Field(() => [Abilities], {nullable:false})
    abilities?: Array<Abilities>;

    @Field(() => [PokemonFormGenerations], {nullable:false})
    pokemonFormGenerations?: Array<PokemonFormGenerations>;

    @Field(() => [ItemGameIndices], {nullable:false})
    itemGameIndices?: Array<ItemGameIndices>;

    @Field(() => [TypeGameIndices], {nullable:false})
    typeGameIndices?: Array<TypeGameIndices>;

    @Field(() => [LocationGameIndices], {nullable:false})
    locationGameIndices?: Array<LocationGameIndices>;

    @Field(() => [VersionGroups], {nullable:false})
    versionGroups?: Array<VersionGroups>;

    @Field(() => GenerationsCount, {nullable:false})
    _count?: Identity<GenerationsCount>;
}
