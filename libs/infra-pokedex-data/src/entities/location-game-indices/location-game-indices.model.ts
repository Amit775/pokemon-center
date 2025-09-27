import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Locations } from '../locations/locations.model';
import { Generations } from '../generations/generations.model';

/**
 * @@TypeGraphQL.type(name: "LocationGameIndex")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "LocationGameIndex")'})
export class LocationGameIndices {

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Locations, {nullable:false})
    location?: Locations;

    @Field(() => Generations, {nullable:false})
    generation?: Generations;
}
