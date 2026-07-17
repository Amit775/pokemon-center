import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedUpdateManyWithoutSuperContestEffectNestedInput } from '../moves/moves-unchecked-update-many-without-super-contest-effect-nested.input';

@InputType()
export class SuperContestEffectsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    appeal?: number;

    @Field(() => MovesUncheckedUpdateManyWithoutSuperContestEffectNestedInput, {nullable:true})
    moves?: Identity<MovesUncheckedUpdateManyWithoutSuperContestEffectNestedInput>;
}
