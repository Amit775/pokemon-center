import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VersionGroupsCountOrderByAggregateInput } from './version-groups-count-order-by-aggregate.input';
import { VersionGroupsAvgOrderByAggregateInput } from './version-groups-avg-order-by-aggregate.input';
import { VersionGroupsMaxOrderByAggregateInput } from './version-groups-max-order-by-aggregate.input';
import { VersionGroupsMinOrderByAggregateInput } from './version-groups-min-order-by-aggregate.input';
import { VersionGroupsSumOrderByAggregateInput } from './version-groups-sum-order-by-aggregate.input';

@InputType()
export class VersionGroupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => VersionGroupsCountOrderByAggregateInput, {nullable:true})
    _count?: VersionGroupsCountOrderByAggregateInput;

    @Field(() => VersionGroupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: VersionGroupsAvgOrderByAggregateInput;

    @Field(() => VersionGroupsMaxOrderByAggregateInput, {nullable:true})
    _max?: VersionGroupsMaxOrderByAggregateInput;

    @Field(() => VersionGroupsMinOrderByAggregateInput, {nullable:true})
    _min?: VersionGroupsMinOrderByAggregateInput;

    @Field(() => VersionGroupsSumOrderByAggregateInput, {nullable:true})
    _sum?: VersionGroupsSumOrderByAggregateInput;
}
