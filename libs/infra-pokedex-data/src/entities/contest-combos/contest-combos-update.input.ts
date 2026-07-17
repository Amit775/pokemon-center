import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateOneRequiredWithoutContestCombosNestedInput } from '../moves/moves-update-one-required-without-contest-combos-nested.input';
import { MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-contest-combos-second-nested.input';

@InputType()
export class ContestCombosUpdateInput {

    @Field(() => MovesUpdateOneRequiredWithoutContestCombosNestedInput, {nullable:true})
    firstMove?: Identity<MovesUpdateOneRequiredWithoutContestCombosNestedInput>;

    @Field(() => MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput, {nullable:true})
    secondMove?: Identity<MovesUpdateOneRequiredWithoutContestCombosSecondNestedInput>;
}
