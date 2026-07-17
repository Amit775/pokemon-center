import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosCreateWithoutSecondMoveInput } from './contest-combos-create-without-second-move.input';
import { Type } from 'class-transformer';
import { ContestCombosCreateOrConnectWithoutSecondMoveInput } from './contest-combos-create-or-connect-without-second-move.input';
import { ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput } from './contest-combos-upsert-with-where-unique-without-second-move.input';
import { ContestCombosCreateManySecondMoveInputEnvelope } from './contest-combos-create-many-second-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput } from './contest-combos-update-with-where-unique-without-second-move.input';
import { ContestCombosUpdateManyWithWhereWithoutSecondMoveInput } from './contest-combos-update-many-with-where-without-second-move.input';
import { ContestCombosScalarWhereInput } from './contest-combos-scalar-where.input';

@InputType()
export class ContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput {

    @Field(() => [ContestCombosCreateWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateWithoutSecondMoveInput)
    create?: Array<ContestCombosCreateWithoutSecondMoveInput>;

    @Field(() => [ContestCombosCreateOrConnectWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateOrConnectWithoutSecondMoveInput)
    connectOrCreate?: Array<ContestCombosCreateOrConnectWithoutSecondMoveInput>;

    @Field(() => [ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput)
    upsert?: Array<ContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput>;

    @Field(() => ContestCombosCreateManySecondMoveInputEnvelope, {nullable:true})
    @Type(() => ContestCombosCreateManySecondMoveInputEnvelope)
    createMany?: ContestCombosCreateManySecondMoveInputEnvelope;

    @Field(() => [ContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => ContestCombosWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [ContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => ContestCombosWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [ContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => ContestCombosWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [ContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => ContestCombosWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput)
    update?: Array<ContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput>;

    @Field(() => [ContestCombosUpdateManyWithWhereWithoutSecondMoveInput], {nullable:true})
    @Type(() => ContestCombosUpdateManyWithWhereWithoutSecondMoveInput)
    updateMany?: Array<ContestCombosUpdateManyWithWhereWithoutSecondMoveInput>;

    @Field(() => [ContestCombosScalarWhereInput], {nullable:true})
    @Type(() => ContestCombosScalarWhereInput)
    deleteMany?: Array<ContestCombosScalarWhereInput>;
}
