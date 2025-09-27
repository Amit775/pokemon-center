import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemCategoriesWhereInput } from './item-categories-where.input';

@InputType()
export class ItemCategoriesScalarRelationFilter {

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    is?: ItemCategoriesWhereInput;

    @Field(() => ItemCategoriesWhereInput, {nullable:true})
    isNot?: ItemCategoriesWhereInput;
}
