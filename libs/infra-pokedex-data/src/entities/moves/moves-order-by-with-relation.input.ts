import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { TypesOrderByWithRelationInput } from '../types/types-order-by-with-relation.input';
import { MoveTargetsOrderByWithRelationInput } from '../move-targets/move-targets-order-by-with-relation.input';
import { MoveDamageClassesOrderByWithRelationInput } from '../move-damage-classes/move-damage-classes-order-by-with-relation.input';
import { ContestTypesOrderByWithRelationInput } from '../contest-types/contest-types-order-by-with-relation.input';
import { ContestEffectsOrderByWithRelationInput } from '../contest-effects/contest-effects-order-by-with-relation.input';
import { SuperContestEffectsOrderByWithRelationInput } from '../super-contest-effects/super-contest-effects-order-by-with-relation.input';
import { PokemonMovesOrderByRelationAggregateInput } from '../pokemon-moves/pokemon-moves-order-by-relation-aggregate.input';
import { MachinesOrderByRelationAggregateInput } from '../machines/machines-order-by-relation-aggregate.input';
import { MoveMetaOrderByRelationAggregateInput } from '../move-meta/move-meta-order-by-relation-aggregate.input';
import { MoveFlagMapOrderByRelationAggregateInput } from '../move-flag-map/move-flag-map-order-by-relation-aggregate.input';
import { ContestCombosOrderByRelationAggregateInput } from '../contest-combos/contest-combos-order-by-relation-aggregate.input';
import { SuperContestCombosOrderByRelationAggregateInput } from '../super-contest-combos/super-contest-combos-order-by-relation-aggregate.input';
import { PokemonEvolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';

@InputType()
export class MovesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    type_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    power?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    pp?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    accuracy?: Identity<SortOrderInput>;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    effect_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    effect_chance?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    contest_type_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    contest_effect_id?: Identity<SortOrderInput>;

    @Field(() => SortOrderInput, {nullable:true})
    super_contest_effect_id?: Identity<SortOrderInput>;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: Identity<GenerationsOrderByWithRelationInput>;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    type?: Identity<TypesOrderByWithRelationInput>;

    @Field(() => MoveTargetsOrderByWithRelationInput, {nullable:true})
    target?: Identity<MoveTargetsOrderByWithRelationInput>;

    @Field(() => MoveDamageClassesOrderByWithRelationInput, {nullable:true})
    damageClass?: Identity<MoveDamageClassesOrderByWithRelationInput>;

    @Field(() => ContestTypesOrderByWithRelationInput, {nullable:true})
    contestType?: Identity<ContestTypesOrderByWithRelationInput>;

    @Field(() => ContestEffectsOrderByWithRelationInput, {nullable:true})
    contestEffect?: Identity<ContestEffectsOrderByWithRelationInput>;

    @Field(() => SuperContestEffectsOrderByWithRelationInput, {nullable:true})
    superContestEffect?: Identity<SuperContestEffectsOrderByWithRelationInput>;

    @Field(() => PokemonMovesOrderByRelationAggregateInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesOrderByRelationAggregateInput>;

    @Field(() => MachinesOrderByRelationAggregateInput, {nullable:true})
    machines?: Identity<MachinesOrderByRelationAggregateInput>;

    @Field(() => MoveMetaOrderByRelationAggregateInput, {nullable:true})
    meta?: Identity<MoveMetaOrderByRelationAggregateInput>;

    @Field(() => MoveFlagMapOrderByRelationAggregateInput, {nullable:true})
    flagMap?: Identity<MoveFlagMapOrderByRelationAggregateInput>;

    @Field(() => ContestCombosOrderByRelationAggregateInput, {nullable:true})
    contestCombos?: Identity<ContestCombosOrderByRelationAggregateInput>;

    @Field(() => ContestCombosOrderByRelationAggregateInput, {nullable:true})
    contestCombosSecond?: Identity<ContestCombosOrderByRelationAggregateInput>;

    @Field(() => SuperContestCombosOrderByRelationAggregateInput, {nullable:true})
    superContestCombos?: Identity<SuperContestCombosOrderByRelationAggregateInput>;

    @Field(() => SuperContestCombosOrderByRelationAggregateInput, {nullable:true})
    superContestCombosSecond?: Identity<SuperContestCombosOrderByRelationAggregateInput>;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    knownMoves?: Identity<PokemonEvolutionOrderByRelationAggregateInput>;
}
