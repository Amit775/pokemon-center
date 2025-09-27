import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { PokemonStatsOrderByRelationAggregateInput } from '../pokemon-stats/pokemon-stats-order-by-relation-aggregate.input';
import { MoveMetaStatChangesOrderByRelationAggregateInput } from '../move-meta-stat-changes/move-meta-stat-changes-order-by-relation-aggregate.input';
import { CharacteristicsOrderByRelationAggregateInput } from '../characteristics/characteristics-order-by-relation-aggregate.input';
import { NaturesOrderByRelationAggregateInput } from '../natures/natures-order-by-relation-aggregate.input';

@InputType()
export class StatsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    damage_class_id?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_battle_only?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    game_index?: SortOrderInput;

    @Field(() => PokemonStatsOrderByRelationAggregateInput, {nullable:true})
    pokemonStats?: PokemonStatsOrderByRelationAggregateInput;

    @Field(() => MoveMetaStatChangesOrderByRelationAggregateInput, {nullable:true})
    moveMetaStatChanges?: MoveMetaStatChangesOrderByRelationAggregateInput;

    @Field(() => CharacteristicsOrderByRelationAggregateInput, {nullable:true})
    characteristics?: CharacteristicsOrderByRelationAggregateInput;

    @Field(() => NaturesOrderByRelationAggregateInput, {nullable:true})
    naturesDecreased?: NaturesOrderByRelationAggregateInput;

    @Field(() => NaturesOrderByRelationAggregateInput, {nullable:true})
    naturesIncreased?: NaturesOrderByRelationAggregateInput;
}
