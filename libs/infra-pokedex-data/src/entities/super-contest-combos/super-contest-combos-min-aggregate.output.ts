import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SuperContestCombosMinAggregate {

    @Field(() => Int, {nullable:true})
    first_move_id?: number;

    @Field(() => Int, {nullable:true})
    second_move_id?: number;
}
