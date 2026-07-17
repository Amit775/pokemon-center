import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { SortOrderInput } from '../prisma/sort-order.input';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { MoveDamageClassesOrderByWithRelationInput } from '../move-damage-classes/move-damage-classes-order-by-with-relation.input';
import { MovesOrderByRelationAggregateInput } from '../moves/moves-order-by-relation-aggregate.input';
import { PokemonTypesOrderByRelationAggregateInput } from '../pokemon-types/pokemon-types-order-by-relation-aggregate.input';
import { PokemonFormTypesOrderByRelationAggregateInput } from '../pokemon-form-types/pokemon-form-types-order-by-relation-aggregate.input';
import { TypeGameIndicesOrderByRelationAggregateInput } from '../type-game-indices/type-game-indices-order-by-relation-aggregate.input';
import { TypeEfficacyOrderByRelationAggregateInput } from '../type-efficacy/type-efficacy-order-by-relation-aggregate.input';
import { BerryFlavorsOrderByRelationAggregateInput } from '../berry-flavors/berry-flavors-order-by-relation-aggregate.input';
import { PokemonEvolutionOrderByRelationAggregateInput } from '../pokemon-evolution/pokemon-evolution-order-by-relation-aggregate.input';
import { BerriesOrderByRelationAggregateInput } from '../berries/berries-order-by-relation-aggregate.input';

@InputType()
export class TypesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    damage_class_id?: Identity<SortOrderInput>;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: Identity<GenerationsOrderByWithRelationInput>;

    @Field(() => MoveDamageClassesOrderByWithRelationInput, {nullable:true})
    damageClass?: Identity<MoveDamageClassesOrderByWithRelationInput>;

    @Field(() => MovesOrderByRelationAggregateInput, {nullable:true})
    moves?: Identity<MovesOrderByRelationAggregateInput>;

    @Field(() => PokemonTypesOrderByRelationAggregateInput, {nullable:true})
    pokemonTypes?: Identity<PokemonTypesOrderByRelationAggregateInput>;

    @Field(() => PokemonFormTypesOrderByRelationAggregateInput, {nullable:true})
    formTypes?: Identity<PokemonFormTypesOrderByRelationAggregateInput>;

    @Field(() => TypeGameIndicesOrderByRelationAggregateInput, {nullable:true})
    gameIndices?: Identity<TypeGameIndicesOrderByRelationAggregateInput>;

    @Field(() => TypeEfficacyOrderByRelationAggregateInput, {nullable:true})
    efficacy?: Identity<TypeEfficacyOrderByRelationAggregateInput>;

    @Field(() => TypeEfficacyOrderByRelationAggregateInput, {nullable:true})
    efficacyTarget?: Identity<TypeEfficacyOrderByRelationAggregateInput>;

    @Field(() => BerryFlavorsOrderByRelationAggregateInput, {nullable:true})
    berryFlavors?: Identity<BerryFlavorsOrderByRelationAggregateInput>;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    knownMoveTypes?: Identity<PokemonEvolutionOrderByRelationAggregateInput>;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    partyTypes?: Identity<PokemonEvolutionOrderByRelationAggregateInput>;

    @Field(() => BerriesOrderByRelationAggregateInput, {nullable:true})
    naturalGiftTypes?: Identity<BerriesOrderByRelationAggregateInput>;
}
