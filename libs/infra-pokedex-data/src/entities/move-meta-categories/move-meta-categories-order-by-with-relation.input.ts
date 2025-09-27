import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MoveMetaOrderByRelationAggregateInput } from '../move-meta/move-meta-order-by-relation-aggregate.input';

@InputType()
export class MoveMetaCategoriesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveMetaOrderByRelationAggregateInput, {nullable:true})
    meta?: MoveMetaOrderByRelationAggregateInput;
}
