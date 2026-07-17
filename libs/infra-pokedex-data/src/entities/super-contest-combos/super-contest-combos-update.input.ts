import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-nested.input';
import { MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-second-nested.input';

@InputType()
export class SuperContestCombosUpdateInput {

    @Field(() => MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput, {nullable:true})
    firstMove?: MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput;

    @Field(() => MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {nullable:true})
    secondMove?: MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput;
}
