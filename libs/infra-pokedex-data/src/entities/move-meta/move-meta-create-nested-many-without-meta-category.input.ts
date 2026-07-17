import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutMetaCategoryInput } from './move-meta-create-without-meta-category.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutMetaCategoryInput } from './move-meta-create-or-connect-without-meta-category.input';
import type { Identity } from 'identity-type';
import { MoveMetaCreateManyMetaCategoryInputEnvelope } from './move-meta-create-many-meta-category-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';

@InputType()
export class MoveMetaCreateNestedManyWithoutMetaCategoryInput {

    @Field(() => [MoveMetaCreateWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaCreateWithoutMetaCategoryInput)
    create?: Array<MoveMetaCreateWithoutMetaCategoryInput>;

    @Field(() => [MoveMetaCreateOrConnectWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutMetaCategoryInput)
    connectOrCreate?: Array<MoveMetaCreateOrConnectWithoutMetaCategoryInput>;

    @Field(() => MoveMetaCreateManyMetaCategoryInputEnvelope, {nullable:true})
    @Type(() => MoveMetaCreateManyMetaCategoryInputEnvelope)
    createMany?: Identity<MoveMetaCreateManyMetaCategoryInputEnvelope>;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;
}
