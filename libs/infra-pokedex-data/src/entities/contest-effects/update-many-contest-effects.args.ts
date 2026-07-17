import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestEffectsUpdateManyMutationInput } from './contest-effects-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyContestEffectsArgs {

    @Field(() => ContestEffectsUpdateManyMutationInput, {nullable:false})
    @Type(() => ContestEffectsUpdateManyMutationInput)
    data!: Identity<ContestEffectsUpdateManyMutationInput>;

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    where?: Identity<ContestEffectsWhereInput>;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
