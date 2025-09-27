import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SuperContestCombosCountAggregate {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
