import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedManyWithoutContestEffectInput } from '../moves/moves-create-nested-many-without-contest-effect.input';

@InputType()
export class ContestEffectsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    appeal!: number;

    @Field(() => Int, {nullable:false})
    jam!: number;

    @Field(() => MovesCreateNestedManyWithoutContestEffectInput, {nullable:true})
    moves?: Identity<MovesCreateNestedManyWithoutContestEffectInput>;
}
