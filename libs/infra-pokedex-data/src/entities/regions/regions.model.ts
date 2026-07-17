import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Generations } from '../generations/generations.model';
import { Locations } from '../locations/locations.model';
import { Pokedexes } from '../pokedexes/pokedexes.model';
import { VersionGroupRegions } from '../version-group-regions/version-group-regions.model';
import { RegionsCount } from './regions-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "Region")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Region")'})
export class Regions {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [Generations], {nullable:false})
    generations?: Array<Generations>;

    @Field(() => [Locations], {nullable:false})
    locations?: Array<Locations>;

    @Field(() => [Pokedexes], {nullable:false})
    pokedexes?: Array<Pokedexes>;

    @Field(() => [VersionGroupRegions], {nullable:false})
    versionGroups?: Array<VersionGroupRegions>;

    @Field(() => RegionsCount, {nullable:false})
    _count?: Identity<RegionsCount>;
}
