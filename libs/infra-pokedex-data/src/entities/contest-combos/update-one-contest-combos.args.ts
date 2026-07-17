import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestCombosUpdateInput } from './contest-combos-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';

@ArgsType()
export class UpdateOneContestCombosArgs {

    @Field(() => ContestCombosUpdateInput, {nullable:false})
    @Type(() => ContestCombosUpdateInput)
    data!: Identity<ContestCombosUpdateInput>;

    @Field(() => ContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => ContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;
}
