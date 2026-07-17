import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesUncheckedUpdateManyWithoutPocketNestedInput } from '../item-categories/item-categories-unchecked-update-many-without-pocket-nested.input';

@InputType()
export class ItemPocketsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemCategoriesUncheckedUpdateManyWithoutPocketNestedInput, {nullable:true})
    categories?: Identity<ItemCategoriesUncheckedUpdateManyWithoutPocketNestedInput>;
}
