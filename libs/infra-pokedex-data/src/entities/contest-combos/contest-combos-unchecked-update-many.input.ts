import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ContestCombosUncheckedUpdateManyInput {

    @Field(() => Int, {nullable:true})
    first_move_id?: number;

    @Field(() => Int, {nullable:true})
    second_move_id?: number;
}
