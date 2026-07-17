import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { GenerationsOrderByWithRelationInput } from '../generations/generations-order-by-with-relation.input';
import { PokemonAbilitiesOrderByRelationAggregateInput } from '../pokemon-abilities/pokemon-abilities-order-by-relation-aggregate.input';

@InputType()
export class AbilitiesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    identifier?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    generation_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    is_main_series?: `${SortOrder}`;

    @Field(() => GenerationsOrderByWithRelationInput, {nullable:true})
    generation?: Identity<GenerationsOrderByWithRelationInput>;

    @Field(() => PokemonAbilitiesOrderByRelationAggregateInput, {nullable:true})
    pokemonAbilities?: Identity<PokemonAbilitiesOrderByRelationAggregateInput>;
}
