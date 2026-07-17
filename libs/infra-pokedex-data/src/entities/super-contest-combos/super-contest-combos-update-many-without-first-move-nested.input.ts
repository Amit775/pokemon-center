import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosCreateWithoutFirstMoveInput } from './super-contest-combos-create-without-first-move.input';
import { Type } from 'class-transformer';
import { SuperContestCombosCreateOrConnectWithoutFirstMoveInput } from './super-contest-combos-create-or-connect-without-first-move.input';
import { SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput } from './super-contest-combos-upsert-with-where-unique-without-first-move.input';
import { SuperContestCombosCreateManyFirstMoveInputEnvelope } from './super-contest-combos-create-many-first-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput } from './super-contest-combos-update-with-where-unique-without-first-move.input';
import { SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput } from './super-contest-combos-update-many-with-where-without-first-move.input';
import { SuperContestCombosScalarWhereInput } from './super-contest-combos-scalar-where.input';

@InputType()
export class SuperContestCombosUpdateManyWithoutFirstMoveNestedInput {

    @Field(() => [SuperContestCombosCreateWithoutFirstMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateWithoutFirstMoveInput)
    create?: Array<SuperContestCombosCreateWithoutFirstMoveInput>;

    @Field(() => [SuperContestCombosCreateOrConnectWithoutFirstMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateOrConnectWithoutFirstMoveInput)
    connectOrCreate?: Array<SuperContestCombosCreateOrConnectWithoutFirstMoveInput>;

    @Field(() => [SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput], {nullable:true})
    @Type(() => SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput)
    upsert?: Array<SuperContestCombosUpsertWithWhereUniqueWithoutFirstMoveInput>;

    @Field(() => SuperContestCombosCreateManyFirstMoveInputEnvelope, {nullable:true})
    @Type(() => SuperContestCombosCreateManyFirstMoveInputEnvelope)
    createMany?: SuperContestCombosCreateManyFirstMoveInputEnvelope;

    @Field(() => [SuperContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => SuperContestCombosWhereUniqueInput)
    set?: Array<Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [SuperContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => SuperContestCombosWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [SuperContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => SuperContestCombosWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [SuperContestCombosWhereUniqueInput], {nullable:true})
    @Type(() => SuperContestCombosWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<SuperContestCombosWhereUniqueInput, 'first_move_id'>>;

    @Field(() => [SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput], {nullable:true})
    @Type(() => SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput)
    update?: Array<SuperContestCombosUpdateWithWhereUniqueWithoutFirstMoveInput>;

    @Field(() => [SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput], {nullable:true})
    @Type(() => SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput)
    updateMany?: Array<SuperContestCombosUpdateManyWithWhereWithoutFirstMoveInput>;

    @Field(() => [SuperContestCombosScalarWhereInput], {nullable:true})
    @Type(() => SuperContestCombosScalarWhereInput)
    deleteMany?: Array<SuperContestCombosScalarWhereInput>;
}
