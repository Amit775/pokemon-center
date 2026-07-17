import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { TypeEfficacyCountOrderByAggregateInput } from './type-efficacy-count-order-by-aggregate.input';
import { TypeEfficacyAvgOrderByAggregateInput } from './type-efficacy-avg-order-by-aggregate.input';
import { TypeEfficacyMaxOrderByAggregateInput } from './type-efficacy-max-order-by-aggregate.input';
import { TypeEfficacyMinOrderByAggregateInput } from './type-efficacy-min-order-by-aggregate.input';
import { TypeEfficacySumOrderByAggregateInput } from './type-efficacy-sum-order-by-aggregate.input';

@InputType()
export class TypeEfficacyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    damage_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_type_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    damage_factor?: `${SortOrder}`;

    @Field(() => TypeEfficacyCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<TypeEfficacyCountOrderByAggregateInput>;

    @Field(() => TypeEfficacyAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<TypeEfficacyAvgOrderByAggregateInput>;

    @Field(() => TypeEfficacyMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<TypeEfficacyMaxOrderByAggregateInput>;

    @Field(() => TypeEfficacyMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<TypeEfficacyMinOrderByAggregateInput>;

    @Field(() => TypeEfficacySumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<TypeEfficacySumOrderByAggregateInput>;
}
