import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutCategoryInput } from './items-update-without-category.input';
import { ItemsCreateWithoutCategoryInput } from './items-create-without-category.input';

@InputType()
export class ItemsUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutCategoryInput)
    update!: Identity<ItemsUpdateWithoutCategoryInput>;

    @Field(() => ItemsCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ItemsCreateWithoutCategoryInput)
    create!: Identity<ItemsCreateWithoutCategoryInput>;
}
