import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { ItemPocketsOrderByWithRelationInput } from '../item-pockets/item-pockets-order-by-with-relation.input';
import { ItemsOrderByRelationAggregateInput } from '../items/items-order-by-relation-aggregate.input';

@InputType()
export class ItemCategoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pocket_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemPocketsOrderByWithRelationInput, {nullable:true})
    pocket?: Identity<ItemPocketsOrderByWithRelationInput>;

    @Field(() => ItemsOrderByRelationAggregateInput, {nullable:true})
    items?: Identity<ItemsOrderByRelationAggregateInput>;
}
