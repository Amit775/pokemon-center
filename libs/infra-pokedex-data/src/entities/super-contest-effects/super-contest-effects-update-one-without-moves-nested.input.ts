import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestEffectsCreateWithoutMovesInput } from './super-contest-effects-create-without-moves.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsCreateOrConnectWithoutMovesInput } from './super-contest-effects-create-or-connect-without-moves.input';
import { SuperContestEffectsUpsertWithoutMovesInput } from './super-contest-effects-upsert-without-moves.input';
import { SuperContestEffectsWhereInput } from './super-contest-effects-where.input';
import { Prisma } from '@prisma/client';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';
import { SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput } from './super-contest-effects-update-to-one-with-where-without-moves.input';

@InputType()
export class SuperContestEffectsUpdateOneWithoutMovesNestedInput {

    @Field(() => SuperContestEffectsCreateWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsCreateWithoutMovesInput)
    create?: SuperContestEffectsCreateWithoutMovesInput;

    @Field(() => SuperContestEffectsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: SuperContestEffectsCreateOrConnectWithoutMovesInput;

    @Field(() => SuperContestEffectsUpsertWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsUpsertWithoutMovesInput)
    upsert?: SuperContestEffectsUpsertWithoutMovesInput;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    disconnect?: SuperContestEffectsWhereInput;

    @Field(() => SuperContestEffectsWhereInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereInput)
    delete?: SuperContestEffectsWhereInput;

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereUniqueInput)
    connect?: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;

    @Field(() => SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput)
    update?: SuperContestEffectsUpdateToOneWithWhereWithoutMovesInput;
}
