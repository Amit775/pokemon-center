import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    power?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    pp?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    accuracy?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    priority?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    target_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    damage_class_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    effect_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    effect_chance?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contest_type_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    contest_effect_id?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    super_contest_effect_id?: SortOrderInput;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: GenerationsOrderByWithRelationInput;

    @Field(() => TypesOrderByWithRelationInput, {nullable:true})
    type?: TypesOrderByWithRelationInput;

    @Field(() => MoveTargetsOrderByWithRelationInput, {nullable:true})
    target?: MoveTargetsOrderByWithRelationInput;

    @Field(() => MoveDamageClassesOrderByWithRelationInput, {nullable:true})
    damageClass?: MoveDamageClassesOrderByWithRelationInput;

    @Field(() => ContestTypesOrderByWithRelationInput, {nullable:true})
    contestType?: ContestTypesOrderByWithRelationInput;

    @Field(() => ContestEffectsOrderByWithRelationInput, {nullable:true})
    contestEffect?: ContestEffectsOrderByWithRelationInput;

    @Field(() => SuperContestEffectsOrderByWithRelationInput, {nullable:true})
    superContestEffect?: SuperContestEffectsOrderByWithRelationInput;

    @Field(() => PokemonMovesOrderByRelationAggregateInput, {nullable:true})
    pokemonMoves?: PokemonMovesOrderByRelationAggregateInput;

    @Field(() => MachinesOrderByRelationAggregateInput, {nullable:true})
    machines?: MachinesOrderByRelationAggregateInput;

    @Field(() => MoveMetaOrderByRelationAggregateInput, {nullable:true})
    meta?: MoveMetaOrderByRelationAggregateInput;

    @Field(() => MoveFlagMapOrderByRelationAggregateInput, {nullable:true})
    flagMap?: MoveFlagMapOrderByRelationAggregateInput;

    @Field(() => ContestCombosOrderByRelationAggregateInput, {nullable:true})
    contestCombos?: ContestCombosOrderByRelationAggregateInput;

    @Field(() => ContestCombosOrderByRelationAggregateInput, {nullable:true})
    contestCombosSecond?: ContestCombosOrderByRelationAggregateInput;

    @Field(() => SuperContestCombosOrderByRelationAggregateInput, {nullable:true})
    superContestCombos?: SuperContestCombosOrderByRelationAggregateInput;

    @Field(() => SuperContestCombosOrderByRelationAggregateInput, {nullable:true})
    superContestCombosSecond?: SuperContestCombosOrderByRelationAggregateInput;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    knownMoves?: PokemonEvolutionOrderByRelationAggregateInput;
}
