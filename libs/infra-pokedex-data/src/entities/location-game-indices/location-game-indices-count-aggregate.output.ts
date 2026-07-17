import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LocationGameIndicesCountAggregate {

    @Field(() => Int, {nullable:false})
    location_id!: number;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
