import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import { ContestEffectsCreateWithoutMovesInput } from './contest-effects-create-without-moves.input';

@InputType()
export class ContestEffectsCreateOrConnectWithoutMovesInput {

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => ContestEffectsCreateWithoutMovesInput, {nullable:false})
    @Type(() => ContestEffectsCreateWithoutMovesInput)
    create!: ContestEffectsCreateWithoutMovesInput;
}
