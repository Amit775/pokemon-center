import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { VersionGroupRegionsCountOrderByAggregateInput } from './version-group-regions-count-order-by-aggregate.input';
import { VersionGroupRegionsAvgOrderByAggregateInput } from './version-group-regions-avg-order-by-aggregate.input';
import { VersionGroupRegionsMaxOrderByAggregateInput } from './version-group-regions-max-order-by-aggregate.input';
import { VersionGroupRegionsMinOrderByAggregateInput } from './version-group-regions-min-order-by-aggregate.input';
import { VersionGroupRegionsSumOrderByAggregateInput } from './version-group-regions-sum-order-by-aggregate.input';

@InputType()
export class VersionGroupRegionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    region_id?: `${SortOrder}`;

    @Field(() => VersionGroupRegionsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<VersionGroupRegionsCountOrderByAggregateInput>;

    @Field(() => VersionGroupRegionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<VersionGroupRegionsAvgOrderByAggregateInput>;

    @Field(() => VersionGroupRegionsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<VersionGroupRegionsMaxOrderByAggregateInput>;

    @Field(() => VersionGroupRegionsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<VersionGroupRegionsMinOrderByAggregateInput>;

    @Field(() => VersionGroupRegionsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<VersionGroupRegionsSumOrderByAggregateInput>;
}
