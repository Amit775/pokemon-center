import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedOneWithoutContestCombosInput } from '../moves/moves-create-nested-one-without-contest-combos.input';

@InputType()
export class ContestCombosCreateWithoutSecondMoveInput {

    @Field(() => MovesCreateNestedOneWithoutContestCombosInput, {nullable:false})
    firstMove!: Identity<MovesCreateNestedOneWithoutContestCombosInput>;
}
