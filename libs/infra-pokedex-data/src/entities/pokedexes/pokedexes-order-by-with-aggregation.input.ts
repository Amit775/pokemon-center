import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokedexesCountOrderByAggregateInput } from './pokedexes-count-order-by-aggregate.input';
import { PokedexesAvgOrderByAggregateInput } from './pokedexes-avg-order-by-aggregate.input';
import { PokedexesMaxOrderByAggregateInput } from './pokedexes-max-order-by-aggregate.input';
import { PokedexesMinOrderByAggregateInput } from './pokedexes-min-order-by-aggregate.input';
import { PokedexesSumOrderByAggregateInput } from './pokedexes-sum-order-by-aggregate.input';

@InputType()
export class PokedexesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    region_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_main_series?: `${SortOrder}`;

    @Field(() => PokedexesCountOrderByAggregateInput, {nullable:true})
    _count?: PokedexesCountOrderByAggregateInput;

    @Field(() => PokedexesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokedexesAvgOrderByAggregateInput;

    @Field(() => PokedexesMaxOrderByAggregateInput, {nullable:true})
    _max?: PokedexesMaxOrderByAggregateInput;

    @Field(() => PokedexesMinOrderByAggregateInput, {nullable:true})
    _min?: PokedexesMinOrderByAggregateInput;

    @Field(() => PokedexesSumOrderByAggregateInput, {nullable:true})
    _sum?: PokedexesSumOrderByAggregateInput;
}
