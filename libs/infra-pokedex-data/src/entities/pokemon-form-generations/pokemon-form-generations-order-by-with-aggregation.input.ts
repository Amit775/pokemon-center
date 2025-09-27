import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonFormGenerationsCountOrderByAggregateInput } from './pokemon-form-generations-count-order-by-aggregate.input';
import { PokemonFormGenerationsAvgOrderByAggregateInput } from './pokemon-form-generations-avg-order-by-aggregate.input';
import { PokemonFormGenerationsMaxOrderByAggregateInput } from './pokemon-form-generations-max-order-by-aggregate.input';
import { PokemonFormGenerationsMinOrderByAggregateInput } from './pokemon-form-generations-min-order-by-aggregate.input';
import { PokemonFormGenerationsSumOrderByAggregateInput } from './pokemon-form-generations-sum-order-by-aggregate.input';

@InputType()
export class PokemonFormGenerationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    pokemon_form_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    game_index?: `${SortOrder}`;

    @Field(() => PokemonFormGenerationsCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonFormGenerationsCountOrderByAggregateInput;

    @Field(() => PokemonFormGenerationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonFormGenerationsAvgOrderByAggregateInput;

    @Field(() => PokemonFormGenerationsMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonFormGenerationsMaxOrderByAggregateInput;

    @Field(() => PokemonFormGenerationsMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonFormGenerationsMinOrderByAggregateInput;

    @Field(() => PokemonFormGenerationsSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonFormGenerationsSumOrderByAggregateInput;
}
