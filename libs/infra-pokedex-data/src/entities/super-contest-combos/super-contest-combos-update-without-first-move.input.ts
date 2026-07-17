import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput } from '../moves/moves-update-one-required-without-super-contest-combos-second-nested.input';

@InputType()
export class SuperContestCombosUpdateWithoutFirstMoveInput {

    @Field(() => MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput, {nullable:true})
    secondMove?: Identity<MovesUpdateOneRequiredWithoutSuperContestCombosSecondNestedInput>;
}
