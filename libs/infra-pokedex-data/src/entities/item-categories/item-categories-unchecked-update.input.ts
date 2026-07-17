import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUncheckedUpdateManyWithoutCategoryNestedInput } from '../items/items-unchecked-update-many-without-category-nested.input';

@InputType()
export class ItemCategoriesUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    pocket_id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemsUncheckedUpdateManyWithoutCategoryNestedInput, {nullable:true})
    items?: Identity<ItemsUncheckedUpdateManyWithoutCategoryNestedInput>;
}
