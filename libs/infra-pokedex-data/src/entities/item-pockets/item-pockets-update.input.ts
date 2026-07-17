import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesUpdateManyWithoutPocketNestedInput } from '../item-categories/item-categories-update-many-without-pocket-nested.input';

@InputType()
export class ItemPocketsUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemCategoriesUpdateManyWithoutPocketNestedInput, {nullable:true})
    categories?: Identity<ItemCategoriesUpdateManyWithoutPocketNestedInput>;
}
