import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestCombosUpdateInput } from './super-contest-combos-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';

@ArgsType()
export class UpdateOneSuperContestCombosArgs {

    @Field(() => SuperContestCombosUpdateInput, {nullable:false})
    @Type(() => SuperContestCombosUpdateInput)
    data!: Identity<SuperContestCombosUpdateInput>;

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;
}
