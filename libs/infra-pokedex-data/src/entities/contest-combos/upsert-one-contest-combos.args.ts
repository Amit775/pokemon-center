import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ContestCombosCreateInput } from './contest-combos-create.input';
import { ContestCombosUpdateInput } from './contest-combos-update.input';

@ArgsType()
export class UpsertOneContestCombosArgs {

    @Field(() => ContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => ContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => ContestCombosCreateInput, {nullable:false})
    @Type(() => ContestCombosCreateInput)
    create!: Identity<ContestCombosCreateInput>;

    @Field(() => ContestCombosUpdateInput, {nullable:false})
    @Type(() => ContestCombosUpdateInput)
    update!: Identity<ContestCombosUpdateInput>;
}
