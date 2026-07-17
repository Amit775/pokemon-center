import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesCreateNestedManyWithoutPocketInput } from '../item-categories/item-categories-create-nested-many-without-pocket.input';

@InputType()
export class ItemPocketsCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => ItemCategoriesCreateNestedManyWithoutPocketInput, {nullable:true})
    categories?: Identity<ItemCategoriesCreateNestedManyWithoutPocketInput>;
}
