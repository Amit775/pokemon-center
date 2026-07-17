import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestEffectsCreateWithoutMovesInput } from './contest-effects-create-without-moves.input';
import { Type } from 'class-transformer';
import { ContestEffectsCreateOrConnectWithoutMovesInput } from './contest-effects-create-or-connect-without-moves.input';
import { Prisma } from '@prisma/client';
import { ContestEffectsWhereUniqueInput } from './contest-effects-where-unique.input';

@InputType()
export class ContestEffectsCreateNestedOneWithoutMovesInput {

    @Field(() => ContestEffectsCreateWithoutMovesInput, {nullable:true})
    @Type(() => ContestEffectsCreateWithoutMovesInput)
    create?: ContestEffectsCreateWithoutMovesInput;

    @Field(() => ContestEffectsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => ContestEffectsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: ContestEffectsCreateOrConnectWithoutMovesInput;

    @Field(() => ContestEffectsWhereUniqueInput, {nullable:true})
    @Type(() => ContestEffectsWhereUniqueInput)
    connect?: Prisma.AtLeast<ContestEffectsWhereUniqueInput, 'id'>;
}
