import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateManyWithoutSuperContestEffectNestedInput } from '../moves/moves-update-many-without-super-contest-effect-nested.input';

@InputType()
export class SuperContestEffectsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    appeal?: number;

    @Field(() => MovesUpdateManyWithoutSuperContestEffectNestedInput, {nullable:true})
    moves?: Identity<MovesUpdateManyWithoutSuperContestEffectNestedInput>;
}
