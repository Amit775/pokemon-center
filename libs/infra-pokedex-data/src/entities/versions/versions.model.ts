import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroups } from '../version-groups/version-groups.model';
import type { Identity } from 'identity-type';
import { Encounters } from '../encounters/encounters.model';
import { PokemonItems } from '../pokemon-items/pokemon-items.model';
import { PokemonGameIndices } from '../pokemon-game-indices/pokemon-game-indices.model';
import { LocationAreaEncounterRates } from '../location-area-encounter-rates/location-area-encounter-rates.model';
import { VersionsCount } from './versions-count.output';

/**
 * @@TypeGraphQL.type(name: "Version")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Version")'})
export class Versions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: Identity<VersionGroups>;

    @Field(() => [Encounters], {nullable:false})
    encounters?: Array<Encounters>;

    @Field(() => [PokemonItems], {nullable:false})
    pokemonItems?: Array<PokemonItems>;

    @Field(() => [PokemonGameIndices], {nullable:false})
    pokemonGameIndices?: Array<PokemonGameIndices>;

    @Field(() => [LocationAreaEncounterRates], {nullable:false})
    locationAreaEncounterRates?: Array<LocationAreaEncounterRates>;

    @Field(() => VersionsCount, {nullable:false})
    _count?: Identity<VersionsCount>;
}
