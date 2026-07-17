import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { SuperContestEffectsCreateWithoutMovesInput } from './super-contest-effects-create-without-moves.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsCreateOrConnectWithoutMovesInput } from './super-contest-effects-create-or-connect-without-moves.input';
import { SuperContestEffectsUpsertWithoutMovesInput } from './super-contest-effects-upsert-without-moves.input';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput } from './super-contest-effects-update-to-one-with-where-without-moves.input';

@InputType()
export class SuperContestEffectsUpdateOneWithoutMovesNestedInput {

    @Field(() => SuperContestEffectsCreateWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsCreateWithoutMovesInput)
    create?: Identity<SuperContestEffectsCreateWithoutMovesInput>;

    @Field(() => SuperContestEffectsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<SuperContestEffectsCreateOrConnectWithoutMovesInput>;

    @Field(() => SuperContestEffectsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsUpsertWithoutMovesInput)
    upsert?: Identity<SuperContestEffectsUpsertWithoutMovesInput>;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    disconnect?: Identity<SuperContestEffectsWhereInput>;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    delete?: Identity<SuperContestEffectsWhereInput>;

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereUniqueInput)
    connect?: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput)
    update?: Identity<SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput>;
}
