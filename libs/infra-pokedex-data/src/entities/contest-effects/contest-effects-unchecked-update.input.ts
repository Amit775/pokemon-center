import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUncheckedUpdateManyWithoutContestEffectNestedInput } from '../moves/moves-unchecked-update-many-without-contest-effect-nested.input';

@InputType()
export class ContestEffectsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    appeal?: number;

    @Field(() => Int, {nullable:true})
    jam?: number;

    @Field(() => MovesUncheckedUpdateManyWithoutContestEffectNestedInput, {nullable:true})
    moves?: Identity<MovesUncheckedUpdateManyWithoutContestEffectNestedInput>;
}
