import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ContestEffectsCreateWithoutMovesInput } from './contest-effects-create-without-moves.input';
import { Type } from 'class-transformer';
import { ContestEffectsCreateOrConnectWithoutMovesInput } from './contest-effects-create-or-connect-without-moves.input';
import { ContestEffectsUpsertWithoutMovesInput } from './contest-effects-upsert-without-moves.input';
import { ContestEffectsWhereInput } from './contest-effects-where.input';
import { Prisma } from '@pokemon-center/prisma';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';
import { ContestEffectsUpdateToOneWithWhereWithoutMovesInput } from './contest-effects-update-to-one-with-where-without-moves.input';

@InputType()
export class ContestEffectsUpdateOneWithoutMovesNestedInput {

    @Field(() => ContestEffectsCreateWithoutMovesInput, {nullable:true})
    @Type(() => ContestEffectsCreateWithoutMovesInput)
    create?: Identity<ContestEffectsCreateWithoutMovesInput>;

    @Field(() => ContestEffectsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => ContestEffectsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: Identity<ContestEffectsCreateOrConnectWithoutMovesInput>;

    @Field(() => ContestEffectsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => ContestEffectsUpsertWithoutMovesInput)
    upsert?: Identity<ContestEffectsUpsertWithoutMovesInput>;

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    disconnect?: Identity<ContestEffectsWhereInput>;

    @Field(() => ContestEffectsWhereInput, {nullable:true})
    @Type(() => ContestEffectsWhereInput)
    delete?: Identity<ContestEffectsWhereInput>;

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:true})
    @Type(() => ContestEffectsWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => ContestEffectsUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => ContestEffectsUpdateToOneWithWhereWithoutMovesInput)
    update?: Identity<ContestEffectsUpdateToOneWithWhereWithoutMovesInput>;
}
