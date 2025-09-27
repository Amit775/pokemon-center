import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StatsCount {

    @Field(() => Int, {nullable:false})
    pokemonStats?: number;

    @Field(() => Int, {nullable:false})
    moveMetaStatChanges?: number;

    @Field(() => Int, {nullable:false})
    characteristics?: number;

    @Field(() => Int, {nullable:false})
    naturesDecreased?: number;

    @Field(() => Int, {nullable:false})
    naturesIncreased?: number;
}
