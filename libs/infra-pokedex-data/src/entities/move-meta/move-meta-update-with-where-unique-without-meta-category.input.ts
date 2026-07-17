import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveMetaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveMetaUpdateWithoutMetaCategoryInput } from './move-meta-update-without-meta-category.input';

@InputType()
export class MoveMetaUpdateWithWhereUniqueWithoutMetaCategoryInput {

    @Field(() => MoveMetaWhereUniqueInput, {nullable:false})
    @Type(() => MoveMetaWhereUniqueInput)
    where!: Prisma.AtLeast<MoveMetaWhereUniqueInput, 'move_id'>;

    @Field(() => MoveMetaUpdateWithoutMetaCategoryInput, {nullable:false})
    @Type(() => MoveMetaUpdateWithoutMetaCategoryInput)
    data!: Identity<MoveMetaUpdateWithoutMetaCategoryInput>;
}
