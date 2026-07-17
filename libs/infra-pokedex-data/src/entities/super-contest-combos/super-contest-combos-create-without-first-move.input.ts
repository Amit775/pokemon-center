import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedOneWithoutSuperContestCombosSecondInput } from '../moves/moves-create-nested-one-without-super-contest-combos-second.input';

@InputType()
export class SuperContestCombosCreateWithoutFirstMoveInput {

    @Field(() => MovesCreateNestedOneWithoutSuperContestCombosSecondInput, {nullable:false})
    secondMove!: Identity<MovesCreateNestedOneWithoutSuperContestCombosSecondInput>;
}
