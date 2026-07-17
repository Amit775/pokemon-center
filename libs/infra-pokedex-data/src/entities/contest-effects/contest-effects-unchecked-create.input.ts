import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MovesUncheckedCreateNestedManyWithoutContestEffectInput } from '../moves/moves-unchecked-create-nested-many-without-contest-effect.input';

@InputType()
export class ContestEffectsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    appeal!: number;

    @Field(() => Int, {nullable:false})
    jam!: number;

    @Field(() => MovesUncheckedCreateNestedManyWithoutContestEffectInput, {nullable:true})
    moves?: MovesUncheckedCreateNestedManyWithoutContestEffectInput;
}
