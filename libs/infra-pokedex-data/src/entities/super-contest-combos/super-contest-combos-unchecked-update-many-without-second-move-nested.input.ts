import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SuperContestCombosCreateWithoutSecondMoveInput } from './super-contest-combos-create-without-second-move.input';
import { Type } from 'class-transformer';
import { SuperContestCombosCreateOrConnectWithoutSecondMoveInput } from './super-contest-combos-create-or-connect-without-second-move.input';
import { SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput } from './super-contest-combos-upsert-with-where-unique-without-second-move.input';
import type { Identity } from 'identity-type';
import { SuperContestCombosCreateManySecondMoveInputEnvelope } from './super-contest-combos-create-many-second-move-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { SuperContestCombosWhereUniqueInput } from './super-contest-combos-where-unique.input';
import { SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput } from './super-contest-combos-update-with-where-unique-without-second-move.input';
import { SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput } from './super-contest-combos-update-many-with-where-without-second-move.input';
import { SuperContestCombosScalarWhereInput } from './super-contest-combos-scalar-where.input';

@InputType()
export class SuperContestCombosUncheckedUpdateManyWithoutSecondMoveNestedInput {

    @Field(() => [SuperContestCombosCreateWithoutSecondMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateWithoutSecondMoveInput)
    create?: Array<SuperContestCombosCreateWithoutSecondMoveInput>;

    @Field(() => [SuperContestCombosCreateOrConnectWithoutSecondMoveInput], {nullable:true})
    @Type(() => SuperContestCombosCreateOrConnectWithoutSecondMoveInput)
    connectOrCreate?: Array<SuperContestCombosCreateOrConnectWithoutSecondMoveInput>;

    @Field(() => [SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput], {nullable:true})
    @Type(() => SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput)
    upsert?: Array<SuperContestCombosUpsertWithWhereUniqueWithoutSecondMoveInput>;

    @Field(() => SuperContestCombosCreateManySecondMoveInputEnvelope, {nullable:true})
    @Type(() => SuperContestCombosCreateManySecondMoveInputEnvelope)
    createMany?: Identity<SuperContestCombosCreateManySecondMoveInputEnvelope>;

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

    @Field(() => [SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput], {nullable:true})
    @Type(() => SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput)
    update?: Array<SuperContestCombosUpdateWithWhereUniqueWithoutSecondMoveInput>;

    @Field(() => [SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput], {nullable:true})
    @Type(() => SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput)
    updateMany?: Array<SuperContestCombosUpdateManyWithWhereWithoutSecondMoveInput>;

    @Field(() => [SuperContestCombosScalarWhereInput], {nullable:true})
    @Type(() => SuperContestCombosScalarWhereInput)
    deleteMany?: Array<SuperContestCombosScalarWhereInput>;
}
