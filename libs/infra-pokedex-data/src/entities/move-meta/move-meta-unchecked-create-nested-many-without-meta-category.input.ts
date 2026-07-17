import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaCreateWithoutMetaCategoryInput } from './move-meta-create-without-meta-category.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateOrConnectWithoutMetaCategoryInput } from './move-meta-create-or-connect-without-meta-category.input';
import { MoveMetaCreateManyMetaCategoryInputEnvelope } from './move-meta-create-many-meta-category-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';

@InputType()
export class MoveMetaUncheckedCreateNestedManyWithoutMetaCategoryInput {

    @Field(() => [MoveMetaCreateWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaCreateWithoutMetaCategoryInput)
    create?: Array<MoveMetaCreateWithoutMetaCategoryInput>;

    @Field(() => [MoveMetaCreateOrConnectWithoutMetaCategoryInput], {nullable:true})
    @Type(() => MoveMetaCreateOrConnectWithoutMetaCategoryInput)
    connectOrCreate?: Array<MoveMetaCreateOrConnectWithoutMetaCategoryInput>;

    @Field(() => MoveMetaCreateManyMetaCategoryInputEnvelope, {nullable:true})
    @Type(() => MoveMetaCreateManyMetaCategoryInputEnvelope)
    createMany?: MoveMetaCreateManyMetaCategoryInputEnvelope;

    @Field(() => [MoveMetaWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>>;
}
