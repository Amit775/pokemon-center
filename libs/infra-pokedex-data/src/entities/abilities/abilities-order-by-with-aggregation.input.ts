import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AbilitiesCountOrderByAggregateInput } from './abilities-count-order-by-aggregate.input';
import { AbilitiesAvgOrderByAggregateInput } from './abilities-avg-order-by-aggregate.input';
import { AbilitiesMaxOrderByAggregateInput } from './abilities-max-order-by-aggregate.input';
import { AbilitiesMinOrderByAggregateInput } from './abilities-min-order-by-aggregate.input';
import { AbilitiesSumOrderByAggregateInput } from './abilities-sum-order-by-aggregate.input';

@InputType()
export class AbilitiesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_main_series?: `${SortOrder}`;

    @Field(() => AbilitiesCountOrderByAggregateInput, {nullable:true})
    _count?: AbilitiesCountOrderByAggregateInput;

    @Field(() => AbilitiesAvgOrderByAggregateInput, {nullable:true})
    _avg?: AbilitiesAvgOrderByAggregateInput;

    @Field(() => AbilitiesMaxOrderByAggregateInput, {nullable:true})
    _max?: AbilitiesMaxOrderByAggregateInput;

    @Field(() => AbilitiesMinOrderByAggregateInput, {nullable:true})
    _min?: AbilitiesMinOrderByAggregateInput;

    @Field(() => AbilitiesSumOrderByAggregateInput, {nullable:true})
    _sum?: AbilitiesSumOrderByAggregateInput;
}
