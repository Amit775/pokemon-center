import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RegionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';
import { LocationAreasOrderByRelationAggregateInput } from '../location-areas/location-areas-order-by-relation-aggregate.input';
import { LocationGameIndicesOrderByRelationAggregateInput } from '../location-game-indices/location-game-indices-order-by-relation-aggregate.input';
import { PokemonEvolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';

@InputType()
export class LocationsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    region_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => RegionsOrderByWithRelationInput, {nullable:true})
    region?: RegionsOrderByWithRelationInput;

    @Field(() => LocationAreasOrderByRelationAggregateInput, {nullable:true})
    areas?: LocationAreasOrderByRelationAggregateInput;

    @Field(() => LocationGameIndicesOrderByRelationAggregateInput, {nullable:true})
    gameIndices?: LocationGameIndicesOrderByRelationAggregateInput;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    evolution?: PokemonEvolutionOrderByRelationAggregateInput;
}
