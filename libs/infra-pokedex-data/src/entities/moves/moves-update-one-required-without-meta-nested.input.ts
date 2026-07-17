import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutMetaInput } from './moves-create-without-meta.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutMetaInput } from './moves-create-or-connect-without-meta.input';
import { MovesUpsertWithoutMetaInput } from './moves-upsert-without-meta.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { MovesUpdateToOneWithWhereWithoutMetaInput } from './moves-update-to-one-with-where-without-meta.input';

@InputType()
export class MovesUpdateOneRequiredWithoutMetaNestedInput {

    @Field(() => MovesCreateWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateWithoutMetaInput)
    create?: Identity<MovesCreateWithoutMetaInput>;

    @Field(() => MovesCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutMetaInput)
    connectOrCreate?: Identity<MovesCreateOrConnectWithoutMetaInput>;

    @Field(() => MovesUpsertWithoutMetaInput, {nullable:true})
    @Type(() => MovesUpsertWithoutMetaInput)
    upsert?: Identity<MovesUpsertWithoutMetaInput>;

    @Field(() => MovesWhereUniqueInput, {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateToOneWithWhereWithoutMetaInput, {nullable:true})
    @Type(() => MovesUpdateToOneWithWhereWithoutMetaInput)
    update?: Identity<MovesUpdateToOneWithWhereWithoutMetaInput>;
}
