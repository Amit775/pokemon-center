import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapCreateWithoutMoveInput } from './move-flag-map-create-without-move.input';
import { Type } from 'class-transformer';
import { MoveFlagMapCreateOrConnectWithoutMoveInput } from './move-flag-map-create-or-connect-without-move.input';
import { MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput } from './move-flag-map-upsert-with-where-unique-without-move.input';
import { MoveFlagMapCreateManyMoveInputEnvelope } from './move-flag-map-create-many-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput } from './move-flag-map-update-with-where-unique-without-move.input';
import { MoveFlagMapUpdateManyWithWhereWithoutMoveInput } from './move-flag-map-update-many-with-where-without-move.input';
import { MoveFlagMapScalarWhereInput } from './move-flag-map-scalar-where.input';

@InputType()
export class MoveFlagMapUpdateManyWithoutMoveNestedInput {

    @Field(() => [MoveFlagMapCreateWithoutMoveInput], {nullable:true})
    @Type(() => MoveFlagMapCreateWithoutMoveInput)
    create?: Array<MoveFlagMapCreateWithoutMoveInput>;

    @Field(() => [MoveFlagMapCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => MoveFlagMapCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<MoveFlagMapCreateOrConnectWithoutMoveInput>;

    @Field(() => [MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput)
    upsert?: Array<MoveFlagMapUpsertWithWhereUniqueWithoutMoveInput>;

    @Field(() => MoveFlagMapCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => MoveFlagMapCreateManyMoveInputEnvelope)
    createMany?: MoveFlagMapCreateManyMoveInputEnvelope;

    @Field(() => [MoveFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => MoveFlagMapWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => MoveFlagMapWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => MoveFlagMapWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveFlagMapWhereUniqueInput], {nullable:true})
    @Type(() => MoveFlagMapWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveFlagMapWhereUniqueInput, 'move_id'>>;

    @Field(() => [MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput)
    update?: Array<MoveFlagMapUpdateWithWhereUniqueWithoutMoveInput>;

    @Field(() => [MoveFlagMapUpdateManyWithWhereWithoutMoveInput], {nullable:true})
    @Type(() => MoveFlagMapUpdateManyWithWhereWithoutMoveInput)
    updateMany?: Array<MoveFlagMapUpdateManyWithWhereWithoutMoveInput>;

    @Field(() => [MoveFlagMapScalarWhereInput], {nullable:true})
    @Type(() => MoveFlagMapScalarWhereInput)
    deleteMany?: Array<MoveFlagMapScalarWhereInput>;
}
