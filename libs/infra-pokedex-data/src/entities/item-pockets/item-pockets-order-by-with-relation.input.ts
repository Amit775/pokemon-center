import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemCategoriesOrderByRelationAggregateInput } from '../item-categories/item-categories-order-by-relation-aggregate.input';

@InputType()
export class ItemPocketsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemCategoriesOrderByRelationAggregateInput, {nullable:true})
    categories?: ItemCategoriesOrderByRelationAggregateInput;
}
