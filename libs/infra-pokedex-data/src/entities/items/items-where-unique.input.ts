import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';
import type { Identity } from 'identity-type';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ItemCategoriesScalarRelationFilter } from '../item-categories/item-categories-scalar-relation-filter.input';
import { ItemFlingEffectsScalarRelationFilter } from '../item-fling-effects/item-fling-effects-scalar-relation-filter.input';
import { PokemonItemsListRelationFilter } from '../pokemon-items/pokemon-items-list-relation-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';
import { BerriesListRelationFilter } from '../berries/berries-list-relation-filter.input';
import { ItemGameIndicesListRelationFilter } from '../item-game-indices/item-game-indices-list-relation-filter.input';
import { ItemFlagMapListRelationFilter } from '../item-flag-map/item-flag-map-list-relation-filter.input';
import { EvolutionChainsListRelationFilter } from '../evolution-chains/evolution-chains-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class ItemsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ItemsWhereInput], {nullable:true})
    AND?: Array<ItemsWhereInput>;

    @Field(() => [ItemsWhereInput], {nullable:true})
    OR?: Array<ItemsWhereInput>;

    @Field(() => [ItemsWhereInput], {nullable:true})
    NOT?: Array<ItemsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    category_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    cost?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    fling_power?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    fling_effect_id?: Identity<IntFilter>;

    @Field(() => ItemCategoriesScalarRelationFilter, {nullable:true})
    category?: Identity<ItemCategoriesScalarRelationFilter>;

    @Field(() => ItemFlingEffectsScalarRelationFilter, {nullable:true})
    flingEffect?: Identity<ItemFlingEffectsScalarRelationFilter>;

    @Field(() => PokemonItemsListRelationFilter, {nullable:true})
    pokemonItems?: Identity<PokemonItemsListRelationFilter>;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: Identity<MachinesListRelationFilter>;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    berries?: Identity<BerriesListRelationFilter>;

    @Field(() => ItemGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: Identity<ItemGameIndicesListRelationFilter>;

    @Field(() => ItemFlagMapListRelationFilter, {nullable:true})
    flagMap?: Identity<ItemFlagMapListRelationFilter>;

    @Field(() => EvolutionChainsListRelationFilter, {nullable:true})
    babyTriggerItems?: Identity<EvolutionChainsListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    triggerItems?: Identity<PokemonEvolutionListRelationFilter>;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    heldItems?: Identity<PokemonEvolutionListRelationFilter>;
}
