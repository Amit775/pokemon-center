import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ContestCombosCreateWithoutFirstMoveInput } from './contest-combos-create-without-first-move.input';
import { Type } from 'class-transformer';
import { ContestCombosCreateOrConnectWithoutFirstMoveInput } from './contest-combos-create-or-connect-without-first-move.input';
import { ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput } from './contest-combos-upsert-with-where-unique-without-first-move.input';
import { ContestCombosCreateManyFirstMoveInputEnvelope } from './contest-combos-create-many-first-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ContestCombosWhereUniqueInput } from './contest-combos-where-unique.input';
import { ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput } from './contest-combos-update-with-where-unique-without-first-move.input';
import { ContestCombosUpdateManyWithWhereWithoutFirstMoveInput } from './contest-combos-update-many-with-where-without-first-move.input';
import { ContestCombosScalarWhereInput } from './contest-combos-scalar-where.input';

@InputType()
export class ContestCombosUpdateManyWithoutFirstMoveNestedInput {

    @Field(() => [ContestCombosCreateWithoutFirstMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateWithoutFirstMoveInput)
    create?: Array<ContestCombosCreateWithoutFirstMoveInput>;

    @Field(() => [ContestCombosCreateOrConnectWithoutFirstMoveInput], {nullable:true})
    @Type(() => ContestCombosCreateOrConnectWithoutFirstMoveInput)
    connectOrCreate?: Array<ContestCombosCreateOrConnectWithoutFirstMoveInput>;

    @Field(() => [ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput], {nullable:true})
    @Type(() => ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput)
    upsert?: Array<ContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput>;

    @Field(() => ContestCombosCreateManyFirstMoveInputEnvelope, {nullable:true})
    @Type(() => ContestCombosCreateManyFirstMoveInputEnvelope)
    createMany?: ContestCombosCreateManyFirstMoveInputEnvelope;

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

    @Field(() => [ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput], {nullable:true})
    @Type(() => ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput)
    update?: Array<ContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput>;

    @Field(() => [ContestCombosUpdateManyWithWhereWithoutFirstMoveInput], {nullable:true})
    @Type(() => ContestCombosUpdateManyWithWhereWithoutFirstMoveInput)
    updateMany?: Array<ContestCombosUpdateManyWithWhereWithoutFirstMoveInput>;

    @Field(() => [ContestCombosScalarWhereInput], {nullable:true})
    @Type(() => ContestCombosScalarWhereInput)
    deleteMany?: Array<ContestCombosScalarWhereInput>;
}
