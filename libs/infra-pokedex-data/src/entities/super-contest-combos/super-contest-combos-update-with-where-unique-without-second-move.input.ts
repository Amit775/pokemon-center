import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { SuperContestCombosUpdateWithoutSecondMoveInput } from './super-contest-combos-update-without-second-move.input';

@InputType()
export class SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput {

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => SuperContestCombosUpdateWithoutSecondMoveInput, {nullable:false})
    @Type(() => SuperContestCombosUpdateWithoutSecondMoveInput)
    data!: Identity<SuperContestCombosUpdateWithoutSecondMoveInput>;
}
