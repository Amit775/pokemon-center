import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateManyWithoutCategoryNestedInput } from '../items/items-update-many-without-category-nested.input';

@InputType()
export class ItemCategoriesUpdateWithoutPocketInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemsUpdateManyWithoutCategoryNestedInput, {nullable:true})
    items?: Identity<ItemsUpdateManyWithoutCategoryNestedInput>;
}
