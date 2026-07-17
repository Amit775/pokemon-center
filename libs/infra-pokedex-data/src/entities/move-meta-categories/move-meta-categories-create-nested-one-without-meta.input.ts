import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaCategoriesCreateWithoutMetaInput } from './move-meta-categories-create-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesCreateOrConnectWithoutMetaInput } from './move-meta-categories-create-or-connect-without-meta.input';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaCategoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';

@InputType()
export class MoveMetaCategoriesCreateNestedOneWithoutMetaInput {

    @Field(() => MoveMetaCategoriesCreateWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaCategoriesCreateWithoutMetaInput)
    create?: Identity<MoveMetaCategoriesCreateWithoutMetaInput>;

    @Field(() => MoveMetaCategoriesCreateOrConnectWithoutMetaInput, {nullable:true})
    @Type(() => MoveMetaCategoriesCreateOrConnectWithoutMetaInput)
    connectOrCreate?: Identity<MoveMetaCategoriesCreateOrConnectWithoutMetaInput>;

    @Field(() => MoveMetaCategoriesWhereUniqueInput, {nullable:true})
    @Type(() => MoveMetaCategoriesWhereUniqueInput)
    connect?: Prisma.AtLeast<MoveMetaCategoriesWhereUniqueInput, 'id'>;
}
