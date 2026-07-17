import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedOneWithoutContestCombosInput } from '../moves/moves-create-nested-one-without-contest-combos.input';
import { MovesCreateNestedOneWithoutContestCombosSecondInput } from '../moves/moves-create-nested-one-without-contest-combos-second.input';

@InputType()
export class ContestCombosCreateInput {

    @Field(() => MovesCreateNestedOneWithoutContestCombosInput, {nullable:false})
    firstMove!: Identity<MovesCreateNestedOneWithoutContestCombosInput>;

    @Field(() => MovesCreateNestedOneWithoutContestCombosSecondInput, {nullable:false})
    secondMove!: Identity<MovesCreateNestedOneWithoutContestCombosSecondInput>;
}
