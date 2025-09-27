import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Generations } from '../generations/generations.model';
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
    generation?: Generations;

    @Field(() => [Versions], {nullable:true})
    versions?: Array<Versions>;

    @Field(() => [EncounterSlots], {nullable:true})
    encounterSlots?: Array<EncounterSlots>;

    @Field(() => [Machines], {nullable:true})
    machines?: Array<Machines>;

    @Field(() => [VersionGroupPokemonMoveMethods], {nullable:true})
    versionGroupPokemonMoveMethods?: Array<VersionGroupPokemonMoveMethods>;

    @Field(() => [VersionGroupRegions], {nullable:true})
    versionGroupRegions?: Array<VersionGroupRegions>;

    @Field(() => [PokedexVersionGroups], {nullable:true})
    pokedexVersionGroups?: Array<PokedexVersionGroups>;

    @Field(() => [PokemonMoves], {nullable:true})
    pokemonMoves?: Array<PokemonMoves>;

    @Field(() => [PokemonForms], {nullable:true})
    pokemonForms?: Array<PokemonForms>;

    @Field(() => VersionGroupsCount, {nullable:false})
    _count?: VersionGroupsCount;
}
