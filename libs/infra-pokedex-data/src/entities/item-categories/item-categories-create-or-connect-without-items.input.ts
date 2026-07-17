import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemCategoriesWhereUniqueInput } from './item-categories-where-unique.input';
import { Type } from 'class-transformer';
import { ItemCategoriesCreateWithoutItemsInput } from './item-categories-create-without-items.input';

@InputType()
export class ItemCategoriesCreateOrConnectWithoutItemsInput {

    @Field(() => ItemCategoriesWhereUniqueInput, {nullable:false})
    @Type(() => ItemCategoriesWhereUniqueInput)
    where!: Prisma.AtLeast<ItemCategoriesWhereUniqueInput, 'id'>;

    @Field(() => ItemCategoriesCreateWithoutItemsInput, {nullable:false})
    @Type(() => ItemCategoriesCreateWithoutItemsInput)
    create!: ItemCategoriesCreateWithoutItemsInput;
}
