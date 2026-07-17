import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class ContestCombosUncheckedUpdateManyWithoutSecondMoveInput {

    @Field(() => Int, {nullable:true})
    first_move_id?: number;
}
