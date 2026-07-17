import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestEffectsUpdateInput } from './contest-effects-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';

@ArgsType()
export class UpdateOneContestEffectsArgs {

    @Field(() => ContestEffectsUpdateInput, {nullable:false})
    @Type(() => ContestEffectsUpdateInput)
    data!: Identity<ContestEffectsUpdateInput>;

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;
}
