import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedCreateNestedManyWithoutSuperContestEffectInput } from '../moves/moves-unchecked-create-nested-many-without-super-contest-effect.input';

@InputType()
export class SuperContestEffectsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    appeal!: number;

    @Field(() => MovesUncheckedCreateNestedManyWithoutSuperContestEffectInput, {nullable:true})
    moves?: Identity<MovesUncheckedCreateNestedManyWithoutSuperContestEffectInput>;
}
