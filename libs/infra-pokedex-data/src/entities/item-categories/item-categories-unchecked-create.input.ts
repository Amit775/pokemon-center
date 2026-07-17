import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUncheckedCreateNestedManyWithoutCategoryInput } from '../items/items-unchecked-create-nested-many-without-category.input';

@InputType()
export class ItemCategoriesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    pocket_id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemsUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    items?: Identity<ItemsUncheckedCreateNestedManyWithoutCategoryInput>;
}
