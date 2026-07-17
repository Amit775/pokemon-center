import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutMetaInput } from './moves-create-without-meta.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutMetaInput } from './moves-create-or-connect-without-meta.input';
import { MovesUpsertWithoutMetaInput } from './moves-upsert-without-meta.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutMetaInput } from './moves-update-to-one-with-where-without-meta.input';

@InputType()
export class MovesUpdateOneRequiredWithoutMetaNestedInput {

    @Field(() => MovesCreateWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateWithoutMetaInput)
    create?: MovesCreateWithoutMetaInput;

    @Field(() => MovesCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutMetaInput)
    connectOrCreate?: MovesCreateOrConnectWithoutMetaInput;

    @Field(() => MovesUpsertWithoutMetaInput, {nullable:true})
    @Type(() => MovesUpsertWithoutMetaInput)
    upsert?: MovesUpsertWithoutMetaInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutMetaInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutMetaInput)
    update?: MovesUpdateToOneWithWhereWithoutMetaInput;
}
