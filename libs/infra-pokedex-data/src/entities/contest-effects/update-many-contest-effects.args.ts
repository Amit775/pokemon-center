import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestEffectsUpdateManyMutationInput } from './contest-effects-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyContestEffectsArgs {

    @Field(() => ContestEffectsUpdateManyMutationInput, {nullable:false})
    @Type(() => ContestEffectsUpdateManyMutationInput)
    data!: ContestEffectsUpdateManyMutationInput;

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    where?: ContestEffectsWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
