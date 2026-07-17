import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemCategoriesCreateInput } from './item-categories-create.input';
import { ItemCategoriesUpdateInput } from './item-categories-update.input';

@ArgsType()
export class UpsertOneItemCategoriesArgs {

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => ItemCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => ItemCategoriesCreateInput, {nullable:false})
    @Type(() => ItemCategoriesCreateInput)
    create!: Identity<ItemCategoriesCreateInput>;

    @Field(() => ItemCategoriesUpdateInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateInput)
    update!: Identity<ItemCategoriesUpdateInput>;
}
