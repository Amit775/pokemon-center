import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemPocketsCreateNestedOneWithoutCategoriesInput } from '../item-pockets/item-pockets-create-nested-one-without-categories.input';
import { ItemsCreateNestedManyWithoutCategoryInput } from '../items/items-create-nested-many-without-category.input';

@InputType()
export class ItemCategoriesCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemPocketsCreateNestedOneWithoutCategoriesInput, {nullable:false})
    pocket!: ItemPocketsCreateNestedOneWithoutCategoriesInput;

    @Field(() => ItemsCreateNestedManyWithoutCategoryInput, {nullable:true})
    items?: ItemsCreateNestedManyWithoutCategoryInput;
}
