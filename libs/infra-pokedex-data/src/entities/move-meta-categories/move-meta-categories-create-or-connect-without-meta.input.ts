import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaCategoriesWhereUniqueInput } from './move-meta-categories-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaCategoriesCreateWithoutMetaInput } from './move-meta-categories-create-without-meta.input';

@InputType()
export class MoveMetaCategoriesCreateOrConnectWithoutMetaInput {

    @Field(() => MoveMetaCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaCategoriesWhereUniqueInput, 'id'>;

    @Field(() => MoveMetaCategoriesCreateWithoutMetaInput, {nullable:false})
    @Type(() => MoveMetaCategoriesCreateWithoutMetaInput)
    create!: MoveMetaCategoriesCreateWithoutMetaInput;
}
