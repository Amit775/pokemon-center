import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-nested.input';
import { MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-second-nested.input';

@InputType()
export class SuperContestCombosUpdateInput {

    @Field(() => MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput, {nullable:true})
    firstMove?: Identity<MovesUpdateOneRequiredWithoutSuperContestCombosNestedInput>;

    @Field(() => MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {nullable:true})
    secondMove?: Identity<MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput>;
}
