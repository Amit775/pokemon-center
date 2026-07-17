import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosCreateWithoutSecondMoveInput } from './contest-combos-create-without-second-move.input';
import { Type } from 'class-transformer';
import { ContestCombosCreateOrConnectWithoutSecondMoveInput } from './contest-combos-create-or-connect-without-second-move.input';
import { ContestCombosCreateManySecondMoveInputEnvelope } from './contest-combos-create-many-second-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';

@InputType()
export class ContestCombosUncheckedCreateNestedManyWithoutSecondMoveInput {

    @Field(() => [ContestCombosCreateWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateWithoutSecondMoveInput)
    create?: Array<ContestCombosCreateWithoutSecondMoveInput>;

    @Field(() => [ContestCombosCreateOrConnectWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateOrConnectWithoutSecondMoveInput)
    connectOrCreate?: Array<ContestCombosCreateOrConnectWithoutSecondMoveInput>;

    @Field(() => ContestCombosCreateManySecondMoveInputEnvelope, {nullable:true})
    @Type(() => ContestCombosCreateManySecondMoveInputEnvelope)
    createMany?: ContestCombosCreateManySecondMoveInputEnvelope;

    @Field(() => [ContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => ContestCombosWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>>;
}
