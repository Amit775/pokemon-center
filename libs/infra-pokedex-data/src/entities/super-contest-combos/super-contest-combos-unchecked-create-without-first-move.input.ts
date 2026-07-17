import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SuperContestCombosUncheckedCreateWithoutFirstMoveInput {

    @Field(() => Int, {nullable:false})
    second_move_id!: number;
}
