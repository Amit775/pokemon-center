import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { SuperContestCombosUpdateWithoutFirstMoveInput } from './super-contest-combos-update-without-first-move.input';
import { SuperContestCombosCreateWithoutFirstMoveInput } from './super-contest-combos-create-without-first-move.input';

@InputType()
export class SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput {

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => SuperContestCombosUpdateWithoutFirstMoveInput, {nullable:false})
    @Type(() => SuperContestCombosUpdateWithoutFirstMoveInput)
    update!: SuperContestCombosUpdateWithoutFirstMoveInput;

    @Field(() => SuperContestCombosCreateWithoutFirstMoveInput, {nullable:false})
    @Type(() => SuperContestCombosCreateWithoutFirstMoveInput)
    create!: SuperContestCombosCreateWithoutFirstMoveInput;
}
