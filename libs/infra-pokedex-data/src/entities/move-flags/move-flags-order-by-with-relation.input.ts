import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MoveFlagMapOrderByRelationAggregateInput } from '../move-flag-map/move-flag-map-order-by-relation-aggregate.input';

@InputType()
export class MoveFlagsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveFlagMapOrderByRelationAggregateInput, {nullable:true})
    flagMap?: MoveFlagMapOrderByRelationAggregateInput;
}
