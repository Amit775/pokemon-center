import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutContestCombosNestedInput } from '../moves/moves-update-one-required-without-contest-combos-nested.input';
import { MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-contest-combos-second-nested.input';

@InputType()
export class ContestCombosUpdateInput {

    @Field(() => MovesUpdateOneRequiredWithoutContestCombosNestedInput, {nullable:true})
    firstMove?: MovesUpdateOneRequiredWithoutContestCombosNestedInput;

    @Field(() => MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput, {nullable:true})
    secondMove?: MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput;
}
