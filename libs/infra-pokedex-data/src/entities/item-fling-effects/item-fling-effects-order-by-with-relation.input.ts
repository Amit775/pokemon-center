import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemsOrderByRelationAggregateInput } from '../items/items-order-by-relation-aggregate.input';

@InputType()
export class ItemFlingEffectsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemsOrderByRelationAggregateInput, {nullable:true})
    items?: ItemsOrderByRelationAggregateInput;
}
