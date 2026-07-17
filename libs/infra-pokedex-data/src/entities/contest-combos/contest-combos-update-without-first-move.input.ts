import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-contest-combos-second-nested.input';

@InputType()
export class ContestCombosUpdateWithoutFirstMoveInput {

    @Field(() => MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput, {nullable:true})
    secondMove?: MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput;
}
