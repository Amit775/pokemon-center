import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { PokemonItemsCountOrderByAggregateInput } from './pokemon-items-count-order-by-aggregate.input';
import { PokemonItemsAvgOrderByAggregateInput } from './pokemon-items-avg-order-by-aggregate.input';
import { PokemonItemsMaxOrderByAggregateInput } from './pokemon-items-max-order-by-aggregate.input';
import { PokemonItemsMinOrderByAggregateInput } from './pokemon-items-min-order-by-aggregate.input';
import { PokemonItemsSumOrderByAggregateInput } from './pokemon-items-sum-order-by-aggregate.input';

@InputType()
export class PokemonItemsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    item_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rarity?: `${SortOrder}`;

    @Field(() => PokemonItemsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<PokemonItemsCountOrderByAggregateInput>;

    @Field(() => PokemonItemsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonItemsAvgOrderByAggregateInput>;

    @Field(() => PokemonItemsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonItemsMaxOrderByAggregateInput>;

    @Field(() => PokemonItemsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonItemsMinOrderByAggregateInput>;

    @Field(() => PokemonItemsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonItemsSumOrderByAggregateInput>;
}
