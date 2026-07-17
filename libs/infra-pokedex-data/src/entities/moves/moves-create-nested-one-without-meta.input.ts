import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutMetaInput } from './moves-create-without-meta.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutMetaInput } from './moves-create-or-connect-without-meta.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesCreateNestedOneWithoutMetaInput {

    @Field(() => MovesCreateWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateWithoutMetaInput)
    create?: Identity<MovesCreateWithoutMetaInput>;

    @Field(() => MovesCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutMetaInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutMetaInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
