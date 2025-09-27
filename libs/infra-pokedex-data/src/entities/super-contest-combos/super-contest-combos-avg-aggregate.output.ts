import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SuperContestCombosAvgAggregate {

    @Field(() => Float, {nullable:true})
    first_move_id?: number;

    @Field(() => Float, {nullable:true})
    second_move_id?: number;
}
