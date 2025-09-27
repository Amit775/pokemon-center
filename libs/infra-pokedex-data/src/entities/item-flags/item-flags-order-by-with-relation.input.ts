import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ItemFlagMapOrderByRelationAggregateInput } from '../item-flag-map/item-flag-map-order-by-relation-aggregate.input';

@InputType()
export class ItemFlagsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => ItemFlagMapOrderByRelationAggregateInput, {nullable:true})
    flagMap?: ItemFlagMapOrderByRelationAggregateInput;
}
