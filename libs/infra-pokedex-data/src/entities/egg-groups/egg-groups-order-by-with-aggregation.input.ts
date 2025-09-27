import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EggGroupsCountOrderByAggregateInput } from './egg-groups-count-order-by-aggregate.input';
import { EggGroupsAvgOrderByAggregateInput } from './egg-groups-avg-order-by-aggregate.input';
import { EggGroupsMaxOrderByAggregateInput } from './egg-groups-max-order-by-aggregate.input';
import { EggGroupsMinOrderByAggregateInput } from './egg-groups-min-order-by-aggregate.input';
import { EggGroupsSumOrderByAggregateInput } from './egg-groups-sum-order-by-aggregate.input';

@InputType()
export class EggGroupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => EggGroupsCountOrderByAggregateInput, {nullable:true})
    _count?: EggGroupsCountOrderByAggregateInput;

    @Field(() => EggGroupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: EggGroupsAvgOrderByAggregateInput;

    @Field(() => EggGroupsMaxOrderByAggregateInput, {nullable:true})
    _max?: EggGroupsMaxOrderByAggregateInput;

    @Field(() => EggGroupsMinOrderByAggregateInput, {nullable:true})
    _min?: EggGroupsMinOrderByAggregateInput;

    @Field(() => EggGroupsSumOrderByAggregateInput, {nullable:true})
    _sum?: EggGroupsSumOrderByAggregateInput;
}
