import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
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
    damage_class_id?: SortOrderInput;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: GenerationsOrderByWithRelationInput;

    @Field(() => MoveDamageClassesOrderByWithRelationInput, {nullable:true})
    damageClass?: MoveDamageClassesOrderByWithRelationInput;

    @Field(() => MovesOrderByRelationAggregateInput, {nullable:true})
    moves?: MovesOrderByRelationAggregateInput;

    @Field(() => PokemonTypesOrderByRelationAggregateInput, {nullable:true})
    pokemonTypes?: PokemonTypesOrderByRelationAggregateInput;

    @Field(() => PokemonFormTypesOrderByRelationAggregateInput, {nullable:true})
    formTypes?: PokemonFormTypesOrderByRelationAggregateInput;

    @Field(() => TypeGameIndicesOrderByRelationAggregateInput, {nullable:true})
    gameIndices?: TypeGameIndicesOrderByRelationAggregateInput;

    @Field(() => TypeEfficacyOrderByRelationAggregateInput, {nullable:true})
    efficacy?: TypeEfficacyOrderByRelationAggregateInput;

    @Field(() => TypeEfficacyOrderByRelationAggregateInput, {nullable:true})
    efficacyTarget?: TypeEfficacyOrderByRelationAggregateInput;

    @Field(() => BerryFlavorsOrderByRelationAggregateInput, {nullable:true})
    berryFlavors?: BerryFlavorsOrderByRelationAggregateInput;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    knownMoveTypes?: PokemonEvolutionOrderByRelationAggregateInput;

    @Field(() => PokemonEvolutionOrderByRelationAggregateInput, {nullable:true})
    partyTypes?: PokemonEvolutionOrderByRelationAggregateInput;

    @Field(() => BerriesOrderByRelationAggregateInput, {nullable:true})
    naturalGiftTypes?: BerriesOrderByRelationAggregateInput;
}
