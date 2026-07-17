import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { SuperContestCombosCreateInput } from './super-contest-combos-create.input';
import { SuperContestCombosUpdateInput } from './super-contest-combos-update.input';

@ArgsType()
export class UpsertOneSuperContestCombosArgs {

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => SuperContestCombosCreateInput, {nullable:false})
    @Type(() => SuperContestCombosCreateInput)
    create!: SuperContestCombosCreateInput;

    @Field(() => SuperContestCombosUpdateInput, {nullable:false})
    @Type(() => SuperContestCombosUpdateInput)
    update!: SuperContestCombosUpdateInput;
}
