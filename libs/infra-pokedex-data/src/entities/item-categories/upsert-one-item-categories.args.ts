import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateInput } from './item-categories-create.input';
import { ItemCategoriesUpdateInput } from './item-categories-update.input';

@ArgsType()
export class UpsertOneItemCategoriesArgs {

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => ItemCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => ItemCategoriesCreateInput, {nullable:false})
    @Type(() => ItemCategoriesCreateInput)
    create!: ItemCategoriesCreateInput;

    @Field(() => ItemCategoriesUpdateInput, {nullable:false})
    @Type(() => ItemCategoriesUpdateInput)
    update!: ItemCategoriesUpdateInput;
}
