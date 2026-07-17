import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Generations } from '../generations/generations.model';
import type { Identity } from 'identity-type';
import { Versions } from '../versions/versions.model';
import { EncounterSlots } from '../encounter-slots/encounter-slots.model';
import { Machines } from '../machines/machines.model';
import { VersionGroupPokemonMoveMethods } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods.model';
import { VersionGroupRegions } from '../version-group-regions/version-group-regions.model';
import { PokedexVersionGroups } from '../pokedex-version-groups/pokedex-version-groups.model';
import { PokemonMoves } from '../pokemon-moves/pokemon-moves.model';
import { PokemonForms } from '../pokemon-forms/pokemon-forms.model';
import { VersionGroupsCount } from './version-groups-count.output';

/**
 * @@TypeGraphQL.type(name: "VersionGroup")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "VersionGroup")'})
export class VersionGroups {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => Generations, {nullable:false})
    generation?: Identity<Generations>;

    @Field(() => [Versions], {nullable:false})
    versions?: Array<Versions>;

    @Field(() => [EncounterSlots], {nullable:false})
    encounterSlots?: Array<EncounterSlots>;

    @Field(() => [Machines], {nullable:false})
    machines?: Array<Machines>;

    @Field(() => [VersionGroupPokemonMoveMethods], {nullable:false})
    versionGroupPokemonMoveMethods?: Array<VersionGroupPokemonMoveMethods>;

    @Field(() => [VersionGroupRegions], {nullable:false})
    versionGroupRegions?: Array<VersionGroupRegions>;

    @Field(() => [PokedexVersionGroups], {nullable:false})
    pokedexVersionGroups?: Array<PokedexVersionGroups>;

    @Field(() => [PokemonMoves], {nullable:false})
    pokemonMoves?: Array<PokemonMoves>;

    @Field(() => [PokemonForms], {nullable:false})
    pokemonForms?: Array<PokemonForms>;

    @Field(() => VersionGroupsCount, {nullable:false})
    _count?: Identity<VersionGroupsCount>;
}
