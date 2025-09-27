import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContestCombosAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    first_move_id?: true;

    @Field(() => Boolean, {nullable:true})
    second_move_id?: true;
}
