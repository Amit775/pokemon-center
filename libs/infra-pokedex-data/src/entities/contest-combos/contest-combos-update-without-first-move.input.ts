import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-contest-combos-second-nested.input';

@InputType()
export class ContestCombosUpdateWithoutFirstMoveInput {

    @Field(() => MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput, {nullable:true})
    secondMove?: Identity<MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput>;
}
