import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesWhereInput } from './item-categories-where.input';

@InputType()
export class ItemCategoriesListRelationFilter {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    every?: ItemCategoriesWhereInput;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    some?: ItemCategoriesWhereInput;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    none?: ItemCategoriesWhereInput;
}
