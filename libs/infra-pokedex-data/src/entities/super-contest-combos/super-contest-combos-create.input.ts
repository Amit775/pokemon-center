import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateNestedOneWithoutSuperContestCombosInput } from '../moves/moves-create-nested-one-without-super-contest-combos.input';
import { MovesCreateNestedOneWithoutSuperContestCombosSecondInput } from '../moves/moves-create-nested-one-without-super-contest-combos-second.input';

@InputType()
export class SuperContestCombosCreateInput {

    @Field(() => MovesCreateNestedOneWithoutSuperContestCombosInput, {nullable:false})
    firstMove!: MovesCreateNestedOneWithoutSuperContestCombosInput;

    @Field(() => MovesCreateNestedOneWithoutSuperContestCombosSecondInput, {nullable:false})
    secondMove!: MovesCreateNestedOneWithoutSuperContestCombosSecondInput;
}
