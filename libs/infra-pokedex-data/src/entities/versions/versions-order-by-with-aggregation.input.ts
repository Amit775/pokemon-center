import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VersionsCountOrderByAggregateInput } from './versions-count-order-by-aggregate.input';
import { VersionsAvgOrderByAggregateInput } from './versions-avg-order-by-aggregate.input';
import { VersionsMaxOrderByAggregateInput } from './versions-max-order-by-aggregate.input';
import { VersionsMinOrderByAggregateInput } from './versions-min-order-by-aggregate.input';
import { VersionsSumOrderByAggregateInput } from './versions-sum-order-by-aggregate.input';

@InputType()
export class VersionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => VersionsCountOrderByAggregateInput, {nullable:true})
    _count?: VersionsCountOrderByAggregateInput;

    @Field(() => VersionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: VersionsAvgOrderByAggregateInput;

    @Field(() => VersionsMaxOrderByAggregateInput, {nullable:true})
    _max?: VersionsMaxOrderByAggregateInput;

    @Field(() => VersionsMinOrderByAggregateInput, {nullable:true})
    _min?: VersionsMinOrderByAggregateInput;

    @Field(() => VersionsSumOrderByAggregateInput, {nullable:true})
    _sum?: VersionsSumOrderByAggregateInput;
}
