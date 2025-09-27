import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ItemCategoriesScalarRelationFilter } from '../item-categories/item-categories-scalar-relation-filter.input';
import { ItemFlingEffectsNullableScalarRelationFilter } from '../item-fling-effects/item-fling-effects-nullable-scalar-relation-filter.input';
import { PokemonItemsListRelationFilter } from '../pokemon-items/pokemon-items-list-relation-filter.input';
import { MachinesListRelationFilter } from '../machines/machines-list-relation-filter.input';
import { BerriesListRelationFilter } from '../berries/berries-list-relation-filter.input';
import { ItemGameIndicesListRelationFilter } from '../item-game-indices/item-game-indices-list-relation-filter.input';
import { ItemFlagMapListRelationFilter } from '../item-flag-map/item-flag-map-list-relation-filter.input';
import { EvolutionChainsListRelationFilter } from '../evolution-chains/evolution-chains-list-relation-filter.input';
import { PokemonEvolutionListRelationFilter } from '../pokemon-evolution/pokemon-evolution-list-relation-filter.input';

@InputType()
export class ItemsWhereInput {

    @Field(() => [ItemsWhereInput], {nullable:true})
    AND?: Array<ItemsWhereInput>;

    @Field(() => [ItemsWhereInput], {nullable:true})
    OR?: Array<ItemsWhereInput>;

    @Field(() => [ItemsWhereInput], {nullable:true})
    NOT?: Array<ItemsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    category_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cost?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_power?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    fling_effect_id?: IntNullableFilter;

    @Field(() => ItemCategoriesScalarRelationFilter, {nullable:true})
    category?: ItemCategoriesScalarRelationFilter;

    @Field(() => ItemFlingEffectsNullableScalarRelationFilter, {nullable:true})
    flingEffect?: ItemFlingEffectsNullableScalarRelationFilter;

    @Field(() => PokemonItemsListRelationFilter, {nullable:true})
    pokemonItems?: PokemonItemsListRelationFilter;

    @Field(() => MachinesListRelationFilter, {nullable:true})
    machines?: MachinesListRelationFilter;

    @Field(() => BerriesListRelationFilter, {nullable:true})
    berries?: BerriesListRelationFilter;

    @Field(() => ItemGameIndicesListRelationFilter, {nullable:true})
    gameIndices?: ItemGameIndicesListRelationFilter;

    @Field(() => ItemFlagMapListRelationFilter, {nullable:true})
    flagMap?: ItemFlagMapListRelationFilter;

    @Field(() => EvolutionChainsListRelationFilter, {nullable:true})
    babyTriggerItems?: EvolutionChainsListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    triggerItems?: PokemonEvolutionListRelationFilter;

    @Field(() => PokemonEvolutionListRelationFilter, {nullable:true})
    heldItems?: PokemonEvolutionListRelationFilter;
}
