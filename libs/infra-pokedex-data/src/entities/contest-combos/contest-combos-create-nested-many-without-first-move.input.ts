import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosCreateWithoutFirstMoveInput } from './contest-combos-create-without-first-move.input';
import { Type } from 'class-transformer';
import { ContestCombosCreateOrConnectWithoutFirstMoveInput } from './contest-combos-create-or-connect-without-first-move.input';
import { ContestCombosCreateManyFirstMoveInputEnvelope } from './contest-combos-create-many-first-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';

@InputType()
export class ContestCombosCreateNestedManyWithoutFirstMoveInput {

    @Field(() => [ContestCombosCreateWithoutFirstMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateWithoutFirstMoveInput)
    create?: Array<ContestCombosCreateWithoutFirstMoveInput>;

    @Field(() => [ContestCombosCreateOrConnectWithoutFirstMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateOrConnectWithoutFirstMoveInput)
    connectOrCreate?: Array<ContestCombosCreateOrConnectWithoutFirstMoveInput>;

    @Field(() => ContestCombosCreateManyFirstMoveInputEnvelope, {nullable:true})
    @Type(() => ContestCombosCreateManyFirstMoveInputEnvelope)
    createMany?: ContestCombosCreateManyFirstMoveInputEnvelope;

    @Field(() => [ContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => ContestCombosWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>>;
}
