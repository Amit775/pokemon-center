import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonStatsCountOrderByAggregateInput } from './pokemon-stats-count-order-by-aggregate.input';
import { PokemonStatsAvgOrderByAggregateInput } from './pokemon-stats-avg-order-by-aggregate.input';
import { PokemonStatsMaxOrderByAggregateInput } from './pokemon-stats-max-order-by-aggregate.input';
import { PokemonStatsMinOrderByAggregateInput } from './pokemon-stats-min-order-by-aggregate.input';
import { PokemonStatsSumOrderByAggregateInput } from './pokemon-stats-sum-order-by-aggregate.input';

@InputType()
export class PokemonStatsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    stat_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base_stat?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    effort?: `${SortOrder}`;

    @Field(() => PokemonStatsCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonStatsCountOrderByAggregateInput;

    @Field(() => PokemonStatsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonStatsAvgOrderByAggregateInput;

    @Field(() => PokemonStatsMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonStatsMaxOrderByAggregateInput;

    @Field(() => PokemonStatsMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonStatsMinOrderByAggregateInput;

    @Field(() => PokemonStatsSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonStatsSumOrderByAggregateInput;
}
