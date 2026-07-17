import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ContestEffectsCreateWithoutMovesInput } from './contest-effects-create-without-moves.input';

@InputType()
export class ContestEffectsCreateOrConnectWithoutMovesInput {

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => ContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => ContestEffectsCreateWithoutMovesInput, {nullable:false})
    @Type(() => ContestEffectsCreateWithoutMovesInput)
    create!: Identity<ContestEffectsCreateWithoutMovesInput>;
}
