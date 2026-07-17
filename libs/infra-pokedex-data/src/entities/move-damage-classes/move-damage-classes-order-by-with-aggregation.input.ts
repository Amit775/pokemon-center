import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { MoveDamageClassesCountOrderByAggregateInput } from './move-damage-classes-count-order-by-aggregate.input';
import { MoveDamageClassesAvgOrderByAggregateInput } from './move-damage-classes-avg-order-by-aggregate.input';
import { MoveDamageClassesMaxOrderByAggregateInput } from './move-damage-classes-max-order-by-aggregate.input';
import { MoveDamageClassesMinOrderByAggregateInput } from './move-damage-classes-min-order-by-aggregate.input';
import { MoveDamageClassesSumOrderByAggregateInput } from './move-damage-classes-sum-order-by-aggregate.input';

@InputType()
export class MoveDamageClassesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => MoveDamageClassesCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<MoveDamageClassesCountOrderByAggregateInput>;

    @Field(() => MoveDamageClassesAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<MoveDamageClassesAvgOrderByAggregateInput>;

    @Field(() => MoveDamageClassesMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<MoveDamageClassesMaxOrderByAggregateInput>;

    @Field(() => MoveDamageClassesMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<MoveDamageClassesMinOrderByAggregateInput>;

    @Field(() => MoveDamageClassesSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<MoveDamageClassesSumOrderByAggregateInput>;
}
