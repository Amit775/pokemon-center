import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutMetaInput } from './moves-create-without-meta.input';

@InputType()
export class MovesCreateOrConnectWithoutMetaInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutMetaInput, {nullable:false})
    @Type(() => MovesCreateWithoutMetaInput)
    create!: MovesCreateWithoutMetaInput;
}
