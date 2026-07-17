import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-nested.input';

@InputType()
export class SuperContestCombosUpdateWithoutSecondMoveInput {

    @Field(() => MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput, {nullable:true})
    firstMove?: MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput;
}
