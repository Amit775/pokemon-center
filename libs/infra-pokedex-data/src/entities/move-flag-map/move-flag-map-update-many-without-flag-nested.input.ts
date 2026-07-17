import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveFlagMapCreateWithoutFlagInput } from './move-flag-map-create-without-flag.input';
import { Type } from 'class-transformer';
import { MoveFlagMapCreateOrConnectWithoutFlagInput } from './move-flag-map-create-or-connect-without-flag.input';
import { MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput } from './move-flag-map-upsert-with-where-unique-without-flag.input';
import { MoveFlagMapCreateManyFlagInputEnvelope } from './move-flag-map-create-many-flag-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveFlagMapWhereUniqueInput } from './move-flag-map-where-unique.input';
import { MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput } from './move-flag-map-update-with-where-unique-without-flag.input';
import { MoveFlagMapUpdateManyWithWhereWithoutFlagInput } from './move-flag-map-update-many-with-where-without-flag.input';
import { MoveFlagMapScalarWhereInput } from './move-flag-map-scalar-where.input';

@InputType()
export class MoveFlagMapUpdateManyWithoutFlagNestedInput {

    @Field(() => [MoveFlagMapCreateWithoutFlagInput], {nullable:true})
    @Type(() => MoveFlagMapCreateWithoutFlagInput)
    create?: Array<MoveFlagMapCreateWithoutFlagInput>;

    @Field(() => [MoveFlagMapCreateOrConnectWithoutFlagInput], {nullable:true})
    @Type(() => MoveFlagMapCreateOrConnectWithoutFlagInput)
    connectOrCreate?: Array<MoveFlagMapCreateOrConnectWithoutFlagInput>;

    @Field(() => [MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput], {nullable:true})
    @Type(() => MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput)
    upsert?: Array<MoveFlagMapUpsertWithWhereUniqueWithoutFlagInput>;

    @Field(() => MoveFlagMapCreateManyFlagInputEnvelope, {nullable:true})
    @Type(() => MoveFlagMapCreateManyFlagInputEnvelope)
    createMany?: MoveFlagMapCreateManyFlagInputEnvelope;

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

    @Field(() => [MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput], {nullable:true})
    @Type(() => MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput)
    update?: Array<MoveFlagMapUpdateWithWhereUniqueWithoutFlagInput>;

    @Field(() => [MoveFlagMapUpdateManyWithWhereWithoutFlagInput], {nullable:true})
    @Type(() => MoveFlagMapUpdateManyWithWhereWithoutFlagInput)
    updateMany?: Array<MoveFlagMapUpdateManyWithWhereWithoutFlagInput>;

    @Field(() => [MoveFlagMapScalarWhereInput], {nullable:true})
    @Type(() => MoveFlagMapScalarWhereInput)
    deleteMany?: Array<MoveFlagMapScalarWhereInput>;
}
