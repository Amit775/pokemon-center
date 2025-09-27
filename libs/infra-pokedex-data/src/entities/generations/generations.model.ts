import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Regions } from '../regions/regions.model';
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
    region?: Regions;

    @Field(() => [PokemonSpecies], {nullable:true})
    pokemonSpecies?: Array<PokemonSpecies>;

    @Field(() => [Moves], {nullable:true})
    moves?: Array<Moves>;

    @Field(() => [Types], {nullable:true})
    types?: Array<Types>;

    @Field(() => [Abilities], {nullable:true})
    abilities?: Array<Abilities>;

    @Field(() => [PokemonFormGenerations], {nullable:true})
    pokemonFormGenerations?: Array<PokemonFormGenerations>;

    @Field(() => [ItemGameIndices], {nullable:true})
    itemGameIndices?: Array<ItemGameIndices>;

    @Field(() => [TypeGameIndices], {nullable:true})
    typeGameIndices?: Array<TypeGameIndices>;

    @Field(() => [LocationGameIndices], {nullable:true})
    locationGameIndices?: Array<LocationGameIndices>;

    @Field(() => [VersionGroups], {nullable:true})
    versionGroups?: Array<VersionGroups>;

    @Field(() => GenerationsCount, {nullable:false})
    _count?: GenerationsCount;
}
