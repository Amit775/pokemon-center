import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutMetaInput } from './moves-create-without-meta.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutMetaInput } from './moves-create-or-connect-without-meta.input';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutMetaInput {

    @Field(() => MovesCreateWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateWithoutMetaInput)
    create?: MovesCreateWithoutMetaInput;

    @Field(() => MovesCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutMetaInput)
    connectOrCreate?: MovesCreateOrConnectWithoutMetaInput;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
