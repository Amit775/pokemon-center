import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedOneWithoutContestCombosSecondInput } from '../moves/moves-create-nested-one-without-contest-combos-second.input';

@InputType()
export class ContestCombosCreateWithoutFirstMoveInput {

    @Field(() => MovesCreateNestedOneWithoutContestCombosSecondInput, {nullable:false})
    secondMove!: Identity<MovesCreateNestedOneWithoutContestCombosSecondInput>;
}
