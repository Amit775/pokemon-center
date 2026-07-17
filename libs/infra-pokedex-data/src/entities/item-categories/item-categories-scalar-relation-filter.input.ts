import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemCategoriesWhereInput } from './item-categories-where.input';

@InputType()
export class ItemCategoriesScalarRelationFilter {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    is?: Identity<ItemCategoriesWhereInput>;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    isNot?: Identity<ItemCategoriesWhereInput>;
}
