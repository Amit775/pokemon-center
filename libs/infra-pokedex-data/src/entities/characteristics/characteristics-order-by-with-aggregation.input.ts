import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacteristicsCountOrderByAggregateInput } from './characteristics-count-order-by-aggregate.input';
import { CharacteristicsAvgOrderByAggregateInput } from './characteristics-avg-order-by-aggregate.input';
import { CharacteristicsMaxOrderByAggregateInput } from './characteristics-max-order-by-aggregate.input';
import { CharacteristicsMinOrderByAggregateInput } from './characteristics-min-order-by-aggregate.input';
import { CharacteristicsSumOrderByAggregateInput } from './characteristics-sum-order-by-aggregate.input';

@InputType()
export class CharacteristicsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    gene_mod_5?: `${SortOrder}`;

    @Field(() => CharacteristicsCountOrderByAggregateInput, {nullable:true})
    _count?: CharacteristicsCountOrderByAggregateInput;

    @Field(() => CharacteristicsAvgOrderByAggregateInput, {nullable:true})
    _avg?: CharacteristicsAvgOrderByAggregateInput;

    @Field(() => CharacteristicsMaxOrderByAggregateInput, {nullable:true})
    _max?: CharacteristicsMaxOrderByAggregateInput;

    @Field(() => CharacteristicsMinOrderByAggregateInput, {nullable:true})
    _min?: CharacteristicsMinOrderByAggregateInput;

    @Field(() => CharacteristicsSumOrderByAggregateInput, {nullable:true})
    _sum?: CharacteristicsSumOrderByAggregateInput;
}
