import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PokemonShapesCountOrderByAggregateInput } from './pokemon-shapes-count-order-by-aggregate.input';
import { PokemonShapesAvgOrderByAggregateInput } from './pokemon-shapes-avg-order-by-aggregate.input';
import { PokemonShapesMaxOrderByAggregateInput } from './pokemon-shapes-max-order-by-aggregate.input';
import { PokemonShapesMinOrderByAggregateInput } from './pokemon-shapes-min-order-by-aggregate.input';
import { PokemonShapesSumOrderByAggregateInput } from './pokemon-shapes-sum-order-by-aggregate.input';

@InputType()
export class PokemonShapesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => PokemonShapesCountOrderByAggregateInput, {nullable:true})
    _count?: PokemonShapesCountOrderByAggregateInput;

    @Field(() => PokemonShapesAvgOrderByAggregateInput, {nullable:true})
    _avg?: PokemonShapesAvgOrderByAggregateInput;

    @Field(() => PokemonShapesMaxOrderByAggregateInput, {nullable:true})
    _max?: PokemonShapesMaxOrderByAggregateInput;

    @Field(() => PokemonShapesMinOrderByAggregateInput, {nullable:true})
    _min?: PokemonShapesMinOrderByAggregateInput;

    @Field(() => PokemonShapesSumOrderByAggregateInput, {nullable:true})
    _sum?: PokemonShapesSumOrderByAggregateInput;
}
