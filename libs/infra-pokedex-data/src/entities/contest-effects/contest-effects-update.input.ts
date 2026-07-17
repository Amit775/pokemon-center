import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateManyWithoutContestEffectNestedInput } from '../moves/moves-update-many-without-contest-effect-nested.input';

@InputType()
export class ContestEffectsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    appeal?: number;

    @Field(() => Int, {nullable:true})
    jam?: number;

    @Field(() => MovesUpdateManyWithoutContestEffectNestedInput, {nullable:true})
    moves?: Identity<MovesUpdateManyWithoutContestEffectNestedInput>;
}
