import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { SuperContestCombosCreateInput } from './super-contest-combos-create.input';
import { SuperContestCombosUpdateInput } from './super-contest-combos-update.input';

@ArgsType()
export class UpsertOneSuperContestCombosArgs {

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => SuperContestCombosCreateInput, {nullable:false})
    @Type(() => SuperContestCombosCreateInput)
    create!: Identity<SuperContestCombosCreateInput>;

    @Field(() => SuperContestCombosUpdateInput, {nullable:false})
    @Type(() => SuperContestCombosUpdateInput)
    update!: Identity<SuperContestCombosUpdateInput>;
}
