import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { ContestCombosUpdateWithoutSecondMoveInput } from './contest-combos-update-without-second-move.input';

@InputType()
export class ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput {

    @Field(() => ContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => ContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => ContestCombosUpdateWithoutSecondMoveInput, {nullable:false})
    @Type(() => ContestCombosUpdateWithoutSecondMoveInput)
    data!: ContestCombosUpdateWithoutSecondMoveInput;
}
