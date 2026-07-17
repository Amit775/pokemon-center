import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SuperContestCombosCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    first_move_id?: true;

    @Field(() => Boolean, {nullable:true})
    second_move_id?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
