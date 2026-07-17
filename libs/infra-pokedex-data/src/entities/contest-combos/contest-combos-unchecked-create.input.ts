import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ContestCombosUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;
}
