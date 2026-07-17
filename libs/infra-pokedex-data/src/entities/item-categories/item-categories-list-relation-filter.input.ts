import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesWhereInput } from './item-categories-where.input';

@InputType()
export class ItemCategoriesListRelationFilter {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    every?: Identity<ItemCategoriesWhereInput>;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    some?: Identity<ItemCategoriesWhereInput>;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    none?: Identity<ItemCategoriesWhereInput>;
}
