import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class SuperContestCombosUncheckedCreateWithoutSecondMoveInput {

    @Field(() => Int, {nullable:false})
    first_move_id!: number;
}
