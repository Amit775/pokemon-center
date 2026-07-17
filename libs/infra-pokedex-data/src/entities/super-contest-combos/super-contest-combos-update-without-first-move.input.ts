import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-second-nested.input';

@InputType()
export class SuperContestCombosUpdateWithoutFirstMoveInput {

    @Field(() => MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {nullable:true})
    secondMove?: MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput;
}
