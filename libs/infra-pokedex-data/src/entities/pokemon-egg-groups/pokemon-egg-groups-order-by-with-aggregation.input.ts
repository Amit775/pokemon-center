import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { PokemonEggGroupsCountOrderByAggregateInput } from './pokemon-egg-groups-count-order-by-aggregate.input';
import { PokemonEggGroupsAvgOrderByAggregateInput } from './pokemon-egg-groups-avg-order-by-aggregate.input';
import { PokemonEggGroupsMaxOrderByAggregateInput } from './pokemon-egg-groups-max-order-by-aggregate.input';
import { PokemonEggGroupsMinOrderByAggregateInput } from './pokemon-egg-groups-min-order-by-aggregate.input';
import { PokemonEggGroupsSumOrderByAggregateInput } from './pokemon-egg-groups-sum-order-by-aggregate.input';

@InputType()
export class PokemonEggGroupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    egg_group_id?: `${SortOrder}`;

    @Field(() => PokemonEggGroupsCountOrderByAggregateInput, {nullable:true})
    _count?: Identity<PokemonEggGroupsCountOrderByAggregateInput>;

    @Field(() => PokemonEggGroupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: Identity<PokemonEggGroupsAvgOrderByAggregateInput>;

    @Field(() => PokemonEggGroupsMaxOrderByAggregateInput, {nullable:true})
    _max?: Identity<PokemonEggGroupsMaxOrderByAggregateInput>;

    @Field(() => PokemonEggGroupsMinOrderByAggregateInput, {nullable:true})
    _min?: Identity<PokemonEggGroupsMinOrderByAggregateInput>;

    @Field(() => PokemonEggGroupsSumOrderByAggregateInput, {nullable:true})
    _sum?: Identity<PokemonEggGroupsSumOrderByAggregateInput>;
}
