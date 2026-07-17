import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutContestCombosNestedInput } from '../moves/moves-update-one-required-without-contest-combos-nested.input';

@InputType()
export class ContestCombosUpdateWithoutSecondMoveInput {

    @Field(() => MovesUpdateOneRequiredWithoutContestCombosNestedInput, {nullable:true})
    firstMove?: MovesUpdateOneRequiredWithoutContestCombosNestedInput;
}
