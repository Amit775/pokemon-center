import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
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
    _count?: Identity<PokemonStatsCountOrderByAggregateInput>;

    @Field(() => PokemonStatsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonStatsAvgOrderByAggregateInput>;

    @Field(() => PokemonStatsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonStatsMaxOrderByAggregateInput>;

    @Field(() => PokemonStatsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonStatsMinOrderByAggregateInput>;

    @Field(() => PokemonStatsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonStatsSumOrderByAggregateInput>;
}
