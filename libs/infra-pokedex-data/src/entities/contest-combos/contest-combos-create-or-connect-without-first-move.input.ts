import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { Type } from 'class-transformer';
import { ContestCombosCreateWithoutFirstMoveInput } from './contest-combos-create-without-first-move.input';

@InputType()
export class ContestCombosCreateOrConnectWithoutFirstMoveInput {

    @Field(() => ContestCombosWhereUniqueInput, {nullable:false})
    @Type(() => ContestCombosWhereUniqueInput)
    where!: Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>;

    @Field(() => ContestCombosCreateWithoutFirstMoveInput, {nullable:false})
    @Type(() => ContestCombosCreateWithoutFirstMoveInput)
    create!: ContestCombosCreateWithoutFirstMoveInput;
}
