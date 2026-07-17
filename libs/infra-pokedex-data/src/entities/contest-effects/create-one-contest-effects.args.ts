import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestEffectsCreateInput } from './contest-effects-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneContestEffectsArgs {

    @Field(() => ContestEffectsCreateInput, {nullable:false})
    @Type(() => ContestEffectsCreateInput)
    data!: Identity<ContestEffectsCreateInput>;
}
