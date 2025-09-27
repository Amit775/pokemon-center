import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonHabitatsCountOrderByAggregateInput } from './pokemon-habitats-count-order-by-aggregate.input';
import { PokemonHabitatsAvgOrderByAggregateInput } from './pokemon-habitats-avg-order-by-aggregate.input';
import { PokemonHabitatsMaxOrderByAggregateInput } from './pokemon-habitats-max-order-by-aggregate.input';
import { PokemonHabitatsMinOrderByAggregateInput } from './pokemon-habitats-min-order-by-aggregate.input';
import { PokemonHabitatsSumOrderByAggregateInput } from './pokemon-habitats-sum-order-by-aggregate.input';

@InputType()
export class PokemonHabitatsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonHabitatsCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonHabitatsCountOrderByAggregateInput;

    @Field(() => PokemonHabitatsAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonHabitatsAvgOrderByAggregateInput;

    @Field(() => PokemonHabitatsMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonHabitatsMaxOrderByAggregateInput;

    @Field(() => PokemonHabitatsMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonHabitatsMinOrderByAggregateInput;

    @Field(() => PokemonHabitatsSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonHabitatsSumOrderByAggregateInput;
}
