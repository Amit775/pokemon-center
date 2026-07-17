import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateNestedOneWithoutContestCombosInput } from '../moves/moves-create-nested-one-without-contest-combos.input';

@InputType()
export class ContestCombosCreateWithoutSecondMoveInput {

    @Field(() => MovesCreateNestedOneWithoutContestCombosInput, {nullable:false})
    firstMove!: MovesCreateNestedOneWithoutContestCombosInput;
}
