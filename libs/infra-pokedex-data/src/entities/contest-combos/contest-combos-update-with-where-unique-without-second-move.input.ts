import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ContestCombosUpdateWithoutSecondMoveInput } from './contest-combos-update-without-second-move.input';

@InputType()
export class ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput {

    @Field(() => ContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => ContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => ContestCombosUpdateWithoutSecondMoveInput, {nullable:false})
    @Type(() => ContestCombosUpdateWithoutSecondMoveInput)
    data!: Identity<ContestCombosUpdateWithoutSecondMoveInput>;
}
