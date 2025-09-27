import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonAbilitiesCountOrderByAggregateInput } from './pokemon-abilities-count-order-by-aggregate.input';
import { PokemonAbilitiesAvgOrderByAggregateInput } from './pokemon-abilities-avg-order-by-aggregate.input';
import { PokemonAbilitiesMaxOrderByAggregateInput } from './pokemon-abilities-max-order-by-aggregate.input';
import { PokemonAbilitiesMinOrderByAggregateInput } from './pokemon-abilities-min-order-by-aggregate.input';
import { PokemonAbilitiesSumOrderByAggregateInput } from './pokemon-abilities-sum-order-by-aggregate.input';

@InputType()
export class PokemonAbilitiesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    ability_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_hidden?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    slot?: `${SortOrder}`;

    @Field(() => PokemonAbilitiesCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonAbilitiesCountOrderByAggregateInput;

    @Field(() => PokemonAbilitiesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonAbilitiesAvgOrderByAggregateInput;

    @Field(() => PokemonAbilitiesMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonAbilitiesMaxOrderByAggregateInput;

    @Field(() => PokemonAbilitiesMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonAbilitiesMinOrderByAggregateInput;

    @Field(() => PokemonAbilitiesSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonAbilitiesSumOrderByAggregateInput;
}
