import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ContestEffectsCreateInput } from './contest-effects-create.input';
import { ContestEffectsUpdateInput } from './contest-effects-update.input';

@ArgsType()
export class UpsertOneContestEffectsArgs {

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => ContestEffectsCreateInput, {nullable:false})
    @Type(() => ContestEffectsCreateInput)
    create!: Identity<ContestEffectsCreateInput>;

    @Field(() => ContestEffectsUpdateInput, {nullable:false})
    @Type(() => ContestEffectsUpdateInput)
    update!: Identity<ContestEffectsUpdateInput>;
}
