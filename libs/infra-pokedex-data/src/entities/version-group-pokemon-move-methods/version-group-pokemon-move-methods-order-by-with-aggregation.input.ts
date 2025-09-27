import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VersionGroupPokemonMoveMethodsCountOrderByAggregateInput } from './version-group-pokemon-move-methods-count-order-by-aggregate.input';
import { VersionGroupPokemonMoveMethodsAvgOrderByAggregateInput } from './version-group-pokemon-move-methods-avg-order-by-aggregate.input';
import { VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput } from './version-group-pokemon-move-methods-max-order-by-aggregate.input';
import { VersionGroupPokemonMoveMethodsMinOrderByAggregateInput } from './version-group-pokemon-move-methods-min-order-by-aggregate.input';
import { VersionGroupPokemonMoveMethodsSumOrderByAggregateInput } from './version-group-pokemon-move-methods-sum-order-by-aggregate.input';

@InputType()
export class VersionGroupPokemonMoveMethodsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokemon_move_method_id?: `${SortOrder}`;

    @Field(() => VersionGroupPokemonMoveMethodsCountOrderByAggregateInput, {nullable:true})
    _count?: VersionGroupPokemonMoveMethodsCountOrderByAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsAvgOrderByAggregateInput, {nullable:true})
    _avg?: VersionGroupPokemonMoveMethodsAvgOrderByAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput, {nullable:true})
    _max?: VersionGroupPokemonMoveMethodsMaxOrderByAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsMinOrderByAggregateInput, {nullable:true})
    _min?: VersionGroupPokemonMoveMethodsMinOrderByAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsSumOrderByAggregateInput, {nullable:true})
    _sum?: VersionGroupPokemonMoveMethodsSumOrderByAggregateInput;
}
