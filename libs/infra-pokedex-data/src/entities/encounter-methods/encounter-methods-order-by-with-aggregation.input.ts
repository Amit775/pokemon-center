import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { EncounterMethodsCountOrderByAggregateInput } from './encounter-methods-count-order-by-aggregate.input';
import { EncounterMethodsAvgOrderByAggregateInput } from './encounter-methods-avg-order-by-aggregate.input';
import { EncounterMethodsMaxOrderByAggregateInput } from './encounter-methods-max-order-by-aggregate.input';
import { EncounterMethodsMinOrderByAggregateInput } from './encounter-methods-min-order-by-aggregate.input';
import { EncounterMethodsSumOrderByAggregateInput } from './encounter-methods-sum-order-by-aggregate.input';

@InputType()
export class EncounterMethodsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    order?: `${SortOrder}`;

    @Field(() => EncounterMethodsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<EncounterMethodsCountOrderByAggregateInput>;

    @Field(() => EncounterMethodsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<EncounterMethodsAvgOrderByAggregateInput>;

    @Field(() => EncounterMethodsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<EncounterMethodsMaxOrderByAggregateInput>;

    @Field(() => EncounterMethodsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<EncounterMethodsMinOrderByAggregateInput>;

    @Field(() => EncounterMethodsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<EncounterMethodsSumOrderByAggregateInput>;
}
