import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateNestedManyWithoutCategoryInput } from '../items/items-create-nested-many-without-category.input';

@InputType()
export class ItemCategoriesCreateWithoutPocketInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemsCreateNestedManyWithoutCategoryInput, {nullable:true})
    items?: Identity<ItemsCreateNestedManyWithoutCategoryInput>;
}
