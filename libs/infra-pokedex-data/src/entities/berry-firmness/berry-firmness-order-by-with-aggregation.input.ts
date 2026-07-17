import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { BerryFirmnessCountOrderByAggregateInput } from './berry-firmness-count-order-by-aggregate.input';
import { BerryFirmnessAvgOrderByAggregateInput } from './berry-firmness-avg-order-by-aggregate.input';
import { BerryFirmnessMaxOrderByAggregateInput } from './berry-firmness-max-order-by-aggregate.input';
import { BerryFirmnessMinOrderByAggregateInput } from './berry-firmness-min-order-by-aggregate.input';
import { BerryFirmnessSumOrderByAggregateInput } from './berry-firmness-sum-order-by-aggregate.input';

@InputType()
export class BerryFirmnessOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => BerryFirmnessCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<BerryFirmnessCountOrderByAggregateInput>;

    @Field(() => BerryFirmnessAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<BerryFirmnessAvgOrderByAggregateInput>;

    @Field(() => BerryFirmnessMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<BerryFirmnessMaxOrderByAggregateInput>;

    @Field(() => BerryFirmnessMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<BerryFirmnessMinOrderByAggregateInput>;

    @Field(() => BerryFirmnessSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<BerryFirmnessSumOrderByAggregateInput>;
}
