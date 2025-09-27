import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ItemsNullableScalarRelationFilter } from '../items/items-nullable-scalar-relation-filter.input';
import { PokemonSpeciesListRelationFilter } from '../pokemon-species/pokemon-species-list-relation-filter.input';

@InputType()
export class EvolutionChainsWhereInput {

    @Field(() => [EvolutionChainsWhereInput], {nullable:true})
    AND?: Array<EvolutionChainsWhereInput>;

    @Field(() => [EvolutionChainsWhereInput], {nullable:true})
    OR?: Array<EvolutionChainsWhereInput>;

    @Field(() => [EvolutionChainsWhereInput], {nullable:true})
    NOT?: Array<EvolutionChainsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    baby_trigger_item_id?: IntNullableFilter;

    @Field(() => ItemsNullableScalarRelationFilter, {nullable:true})
    babyTriggerItem?: ItemsNullableScalarRelationFilter;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: PokemonSpeciesListRelationFilter;
}
