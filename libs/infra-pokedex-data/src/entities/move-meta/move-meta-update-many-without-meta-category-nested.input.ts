import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutMetaCategoryInput } from './move-meta-create-without-meta-category.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutMetaCategoryInput } from './move-meta-create-or-connect-without-meta-category.input';
import { MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput } from './move-meta-upsert-with-where-unique-without-meta-category.input';
import type { Identity } from 'identity-type';
import { MoveMetaCreateManyMetaCategoryInputEnvelope } from './move-meta-create-many-meta-category-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput } from './move-meta-update-with-where-unique-without-meta-category.input';
import { MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput } from './move-meta-update-many-with-where-without-meta-category.input';
import { MoveMetaScalarWhereInput } from './move-meta-scalar-where.input';

@InputType()
export class MoveMetaUpdateManyWithoutMetaCategoryNestedInput {

    @Field(() => [MoveMetaCreateWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaCreateWithoutMetaCategoryInput)
    create?: Array<MoveMetaCreateWithoutMetaCategoryInput>;

    @Field(() => [MoveMetaCreateOrConnectWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutMetaCategoryInput)
    connectOrCreate?: Array<MoveMetaCreateOrConnectWithoutMetaCategoryInput>;

    @Field(() => [MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput)
    upsert?: Array<MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput>;

    @Field(() => MoveMetaCreateManyMetaCategoryInputEnvelope, {nullable:true})
    @Type(() => MoveMetaCreateManyMetaCategoryInputEnvelope)
    createMany?: Identity<MoveMetaCreateManyMetaCategoryInputEnvelope>;

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

    @Field(() => [MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput)
    update?: Array<MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput>;

    @Field(() => [MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput)
    updateMany?: Array<MoveMetaUpdateManyWithWhereWithoutMetaCategoryInput>;

    @Field(() => [MoveMetaScalarWhereInput], {nullable:true})
    @Type(() => MoveMetaScalarWhereInput)
    deleteMany?: Array<MoveMetaScalarWhereInput>;
}
