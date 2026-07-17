import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { ContestCombosUpdateWithoutFirstMoveInput } from './contest-combos-update-without-first-move.input';

@InputType()
export class ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput {

    @Field(() => ContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => ContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => ContestCombosUpdateWithoutFirstMoveInput, {nullable:false})
    @Type(() => ContestCombosUpdateWithoutFirstMoveInput)
    data!: ContestCombosUpdateWithoutFirstMoveInput;
}
