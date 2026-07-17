import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import { ContestEffectsCreateInput } from './contest-effects-create.input';
import { ContestEffectsUpdateInput } from './contest-effects-update.input';

@ArgsType()
export class UpsertOneContestEffectsArgs {

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => ContestEffectsCreateInput, {nullable:false})
    @Type(() => ContestEffectsCreateInput)
    create!: ContestEffectsCreateInput;

    @Field(() => ContestEffectsUpdateInput, {nullable:false})
    @Type(() => ContestEffectsUpdateInput)
    update!: ContestEffectsUpdateInput;
}
