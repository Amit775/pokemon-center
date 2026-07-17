import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { NaturesCountOrderByAggregateInput } from './natures-count-order-by-aggregate.input';
import { NaturesAvgOrderByAggregateInput } from './natures-avg-order-by-aggregate.input';
import { NaturesMaxOrderByAggregateInput } from './natures-max-order-by-aggregate.input';
import { NaturesMinOrderByAggregateInput } from './natures-min-order-by-aggregate.input';
import { NaturesSumOrderByAggregateInput } from './natures-sum-order-by-aggregate.input';

@InputType()
export class NaturesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    decreased_stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    increased_stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    hates_flavor_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    likes_flavor_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => NaturesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<NaturesCountOrderByAggregateInput>;

    @Field(() => NaturesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<NaturesAvgOrderByAggregateInput>;

    @Field(() => NaturesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<NaturesMaxOrderByAggregateInput>;

    @Field(() => NaturesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<NaturesMinOrderByAggregateInput>;

    @Field(() => NaturesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<NaturesSumOrderByAggregateInput>;
}
