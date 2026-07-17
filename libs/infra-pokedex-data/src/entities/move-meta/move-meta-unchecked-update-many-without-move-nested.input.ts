import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutMoveInput } from './move-meta-create-without-move.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutMoveInput } from './move-meta-create-or-connect-without-move.input';
import { MoveMetaUpsertWithWhereUniqueWithoutMoveInput } from './move-meta-upsert-with-where-unique-without-move.input';
import { MoveMetaCreateManyMoveInputEnvelope } from './move-meta-create-many-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { MoveMetaUpdateWithWhereUniqueWithoutMoveInput } from './move-meta-update-with-where-unique-without-move.input';
import { MoveMetaUpdateManyWithWhereWithoutMoveInput } from './move-meta-update-many-with-where-without-move.input';
import { MoveMetaScalarWhereInput } from './move-meta-scalar-where.input';

@InputType()
export class MoveMetaUncheckedUpdateManyWithoutMoveNestedInput {

    @Field(() => [MoveMetaCreateWithoutMoveInput], {nullable:true})
    @Type(() => MoveMetaCreateWithoutMoveInput)
    create?: Array<MoveMetaCreateWithoutMoveInput>;

    @Field(() => [MoveMetaCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<MoveMetaCreateOrConnectWithoutMoveInput>;

    @Field(() => [MoveMetaUpsertWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => MoveMetaUpsertWithWhereUniqueWithoutMoveInput)
    upsert?: Array<MoveMetaUpsertWithWhereUniqueWithoutMoveInput>;

    @Field(() => MoveMetaCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => MoveMetaCreateManyMoveInputEnvelope)
    createMany?: MoveMetaCreateManyMoveInputEnvelope;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveMetaUpdateWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => MoveMetaUpdateWithWhereUniqueWithoutMoveInput)
    update?: Array<MoveMetaUpdateWithWhereUniqueWithoutMoveInput>;

    @Field(() => [MoveMetaUpdateManyWithWhereWithoutMoveInput], {nullable:true})
    @Type(() => MoveMetaUpdateManyWithWhereWithoutMoveInput)
    updateMany?: Array<MoveMetaUpdateManyWithWhereWithoutMoveInput>;

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    @Type(() => MoveMetaScalarWhereInput)
    deleteMany?: Array<MoveMetaScalarWhereInput>;
}
