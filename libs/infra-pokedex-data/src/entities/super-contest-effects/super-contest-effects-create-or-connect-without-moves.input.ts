import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { SuperContestEffectsCreateWithoutMovesInput } from './super-contest-effects-create-without-moves.input';

@InputType()
export class SuperContestEffectsCreateOrConnectWithoutMovesInput {

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:false})
    @Type(() => SuperContestEffectsWhereUniqueInput)
    where!: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => SuperContestEffectsCreateWithoutMovesInput, {nullable:false})
    @Type(() => SuperContestEffectsCreateWithoutMovesInput)
    create!: Identity<SuperContestEffectsCreateWithoutMovesInput>;
}
