import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { ItemsScalarRelationFilter } from '../items/items-scalar-relation-filter.input';
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
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    baby_trigger_item_id?: Identity<IntFilter>;

    @Field(() => ItemsScalarRelationFilter, {nullable:true})
    babyTriggerItem?: Identity<ItemsScalarRelationFilter>;

    @Field(() => PokemonSpeciesListRelationFilter, {nullable:true})
    species?: Identity<PokemonSpeciesListRelationFilter>;
}
