import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokedexVersionGroupsCountOrderByAggregateInput } from './pokedex-version-groups-count-order-by-aggregate.input';
import { PokedexVersionGroupsAvgOrderByAggregateInput } from './pokedex-version-groups-avg-order-by-aggregate.input';
import { PokedexVersionGroupsMaxOrderByAggregateInput } from './pokedex-version-groups-max-order-by-aggregate.input';
import { PokedexVersionGroupsMinOrderByAggregateInput } from './pokedex-version-groups-min-order-by-aggregate.input';
import { PokedexVersionGroupsSumOrderByAggregateInput } from './pokedex-version-groups-sum-order-by-aggregate.input';

@InputType()
export class PokedexVersionGroupsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => PokedexVersionGroupsCountOrderByAggregateInput, {nullable:true})
    _count?: PokedexVersionGroupsCountOrderByAggregateInput;

    @Field(() => PokedexVersionGroupsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokedexVersionGroupsAvgOrderByAggregateInput;

    @Field(() => PokedexVersionGroupsMaxOrderByAggregateInput, {nullable:true})
    _max?: PokedexVersionGroupsMaxOrderByAggregateInput;

    @Field(() => PokedexVersionGroupsMinOrderByAggregateInput, {nullable:true})
    _min?: PokedexVersionGroupsMinOrderByAggregateInput;

    @Field(() => PokedexVersionGroupsSumOrderByAggregateInput, {nullable:true})
    _sum?: PokedexVersionGroupsSumOrderByAggregateInput;
}
