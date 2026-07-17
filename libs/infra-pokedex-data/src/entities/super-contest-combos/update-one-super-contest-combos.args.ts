import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SuperContestCombosUpdateInput } from './super-contest-combos-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';

@ArgsType()
export class UpdateOneSuperContestCombosArgs {

    @Field(() => SuperContestCombosUpdateInput, {nullable:false})
    @Type(() => SuperContestCombosUpdateInput)
    data!: SuperContestCombosUpdateInput;

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;
}
