import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput } from '../item-pockets/item-pockets-update-one-required-without-categories-nested.input';

@InputType()
export class ItemCategoriesUpdateWithoutItemsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    pocket?: Identity<ItemPocketsUpdateOneRequiredWithoutCategoriesNestedInput>;
}
