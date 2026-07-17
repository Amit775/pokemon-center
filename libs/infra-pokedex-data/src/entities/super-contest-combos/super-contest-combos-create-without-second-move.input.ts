import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedOneWithoutSuperContestCombosInput } from '../moves/moves-create-nested-one-without-super-contest-combos.input';

@InputType()
export class SuperContestCombosCreateWithoutSecondMoveInput {

    @Field(() => MovesCreateNestedOneWithoutSuperContestCombosInput, {nullable:false})
    firstMove!: Identity<MovesCreateNestedOneWithoutSuperContestCombosInput>;
}
