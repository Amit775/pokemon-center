import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosCreateWithoutSecondMoveInput } from './contest-combos-create-without-second-move.input';
import { Type } from 'class-transformer';
import { ContestCombosCreateOrConnectWithoutSecondMoveInput } from './contest-combos-create-or-connect-without-second-move.input';
import type { Identity } from 'identity-type';
import { ContestCombosCreateManySecondMoveInputEnvelope } from './contest-combos-create-many-second-move-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';

@InputType()
export class ContestCombosCreateNestedManyWithoutSecondMoveInput {

    @Field(() => [ContestCombosCreateWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateWithoutSecondMoveInput)
    create?: Array<ContestCombosCreateWithoutSecondMoveInput>;

    @Field(() => [ContestCombosCreateOrConnectWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateOrConnectWithoutSecondMoveInput)
    connectOrCreate?: Array<ContestCombosCreateOrConnectWithoutSecondMoveInput>;

    @Field(() => ContestCombosCreateManySecondMoveInputEnvelope, {nullable:true})
    @Type(() => ContestCombosCreateManySecondMoveInputEnvelope)
    createMany?: Identity<ContestCombosCreateManySecondMoveInputEnvelope>;

    @Field(() => [ContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => ContestCombosWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>>;
}
