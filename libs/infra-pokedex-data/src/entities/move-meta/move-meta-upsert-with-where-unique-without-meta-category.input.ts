import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaUpdateWithoutMetaCategoryInput } from './move-meta-update-without-meta-category.input';
import { MoveMetaCreateWithoutMetaCategoryInput } from './move-meta-create-without-meta-category.input';

@InputType()
export class MoveMetaUpsertWithWhereUniqueWithoutMetaCategoryInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaUpdateWithoutMetaCategoryInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutMetaCategoryInput)
    update!: Identity<MoveMetaUpdateWithoutMetaCategoryInput>;

    @Field(() => MoveMetaCreateWithoutMetaCategoryInput, {nullable:false})
    @Type(() => MoveMetaCreateWithoutMetaCategoryInput)
    create!: Identity<MoveMetaCreateWithoutMetaCategoryInput>;
}
