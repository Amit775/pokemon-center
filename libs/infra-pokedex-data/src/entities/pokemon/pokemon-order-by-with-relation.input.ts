import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonSpeciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';
import { PokemonFormsOrderByRelationAggregateInput } from '../pokemon-forms/pokemon-forms-order-by-relation-aggregate.input';
import { PokemonAbilitiesOrderByRelationAggregateInput } from '../pokemon-abilities/pokemon-abilities-order-by-relation-aggregate.input';
import { PokemonMovesOrderByRelationAggregateInput } from '../pokemon-moves/pokemon-moves-order-by-relation-aggregate.input';
import { PokemonStatsOrderByRelationAggregateInput } from '../pokemon-stats/pokemon-stats-order-by-relation-aggregate.input';
import { PokemonTypesOrderByRelationAggregateInput } from '../pokemon-types/pokemon-types-order-by-relation-aggregate.input';
import { PokemonItemsOrderByRelationAggregateInput } from '../pokemon-items/pokemon-items-order-by-relation-aggregate.input';
import { PokemonGameIndicesOrderByRelationAggregateInput } from '../pokemon-game-indices/pokemon-game-indices-order-by-relation-aggregate.input';
import { EncountersOrderByRelationAggregateInput } from '../encounters/encounters-order-by-relation-aggregate.input';

@InputType()
export class PokemonOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    height?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    weight?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    base_experience?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    order?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    is_default?: `${SortOrder}`;

    @Field(() => PokemonSpeciesOrderByWithRelationInput, {nullable:true})
    species?: PokemonSpeciesOrderByWithRelationInput;

    @Field(() => PokemonFormsOrderByRelationAggregateInput, {nullable:true})
    forms?: PokemonFormsOrderByRelationAggregateInput;

    @Field(() => PokemonAbilitiesOrderByRelationAggregateInput, {nullable:true})
    abilities?: PokemonAbilitiesOrderByRelationAggregateInput;

    @Field(() => PokemonMovesOrderByRelationAggregateInput, {nullable:true})
    moves?: PokemonMovesOrderByRelationAggregateInput;

    @Field(() => PokemonStatsOrderByRelationAggregateInput, {nullable:true})
    stats?: PokemonStatsOrderByRelationAggregateInput;

    @Field(() => PokemonTypesOrderByRelationAggregateInput, {nullable:true})
    types?: PokemonTypesOrderByRelationAggregateInput;

    @Field(() => PokemonItemsOrderByRelationAggregateInput, {nullable:true})
    items?: PokemonItemsOrderByRelationAggregateInput;

    @Field(() => PokemonGameIndicesOrderByRelationAggregateInput, {nullable:true})
    gameIndices?: PokemonGameIndicesOrderByRelationAggregateInput;

    @Field(() => EncountersOrderByRelationAggregateInput, {nullable:true})
    encounters?: EncountersOrderByRelationAggregateInput;
}
