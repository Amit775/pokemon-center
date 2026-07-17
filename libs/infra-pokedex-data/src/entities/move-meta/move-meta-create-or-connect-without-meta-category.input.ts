import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { MoveMetaCreateWithoutMetaCategoryInput } from './move-meta-create-without-meta-category.input';

@InputType()
export class MoveMetaCreateOrConnectWithoutMetaCategoryInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaCreateWithoutMetaCategoryInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutMetaCategoryInput)
    create!: MoveMetaCreateWithoutMetaCategoryInput;
}
