import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { SuperContestCombosCreateWithoutSecondMoveInput } from './super-contest-combos-create-without-second-move.input';

@InputType()
export class SuperContestCombosCreateOrConnectWithoutSecondMoveInput {

    @Field(() => SuperContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => SuperContestCombosCreateWithoutSecondMoveInput, {nullable:false})
    @Type(() => SuperContestCombosCreateWithoutSecondMoveInput)
    create!: SuperContestCombosCreateWithoutSecondMoveInput;
}
