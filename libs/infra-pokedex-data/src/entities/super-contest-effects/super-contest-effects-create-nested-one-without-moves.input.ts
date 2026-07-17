import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestEffectsCreateWithoutMovesInput } from './super-contest-effects-create-without-moves.input';
import { Type } from 'class-transformer';
import { SuperContestEffectsCreateOrConnectWithoutMovesInput } from './super-contest-effects-create-or-connect-without-moves.input';
import { Prisma } from '@prisma/client';
import { SuperContestEffectsWhereUniqueInput } from './super-contest-effects-where-unique.input';

@InputType()
export class SuperContestEffectsCreateNestedOneWithoutMovesInput {

    @Field(() => SuperContestEffectsCreateWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsCreateWithoutMovesInput)
    create?: SuperContestEffectsCreateWithoutMovesInput;

    @Field(() => SuperContestEffectsCreateOrConnectWithoutMovesInput, {nullable:true})
    @Type(() => SuperContestEffectsCreateOrConnectWithoutMovesInput)
    connectOrCreate?: SuperContestEffectsCreateOrConnectWithoutMovesInput;

    @Field(() => SuperContestEffectsWhereUniqueInput, {nullable:true})
    @Type(() => SuperContestEffectsWhereUniqueInput)
    connect?: Prisma.AtLeast<SuperContestEffectsWhereUniqueInput, 'id'>;
}
