import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Regions } from '../regions/regions.model';
import { LocationAreas } from '../location-areas/location-areas.model';
import { LocationGameIndices } from '../location-game-indices/location-game-indices.model';
import { PokemonEvolution } from '../pokemon-evolution/pokemon-evolution.model';
import { LocationsCount } from './locations-count.output';

/**
 * @@TypeGraphQL.type(name: "Location")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Location")'})
export class Locations {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    region_id!: number | null;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Regions, {nullable:true})
    region?: Regions | null;

    @Field(() => [LocationAreas], {nullable:true})
    areas?: Array<LocationAreas>;

    @Field(() => [LocationGameIndices], {nullable:true})
    gameIndices?: Array<LocationGameIndices>;

    @Field(() => [PokemonEvolution], {nullable:true})
    evolution?: Array<PokemonEvolution>;

    @Field(() => LocationsCount, {nullable:false})
    _count?: LocationsCount;
}
