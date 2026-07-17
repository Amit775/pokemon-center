import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutMetaInput } from './moves-create-without-meta.input';

@InputType()
export class MovesCreateOrConnectWithoutMetaInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutMetaInput, {nullable:false})
    @Type(() => MovesCreateWithoutMetaInput)
    create!: Identity<MovesCreateWithoutMetaInput>;
}
