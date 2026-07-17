import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContestCombosUpdateInput } from './contest-combos-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';

@ArgsType()
export class UpdateOneContestCombosArgs {

    @Field(() => ContestCombosUpdateInput, {nullable:false})
    @Type(() => ContestCombosUpdateInput)
    data!: ContestCombosUpdateInput;

    @Field(() => ContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => ContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;
}
