import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateNestedManyWithoutSuperContestEffectInput } from '../moves/moves-create-nested-many-without-super-contest-effect.input';

@InputType()
export class SuperContestEffectsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    appeal!: number;

    @Field(() => MovesCreateNestedManyWithoutSuperContestEffectInput, {nullable:true})
    moves?: Identity<MovesCreateNestedManyWithoutSuperContestEffectInput>;
}
