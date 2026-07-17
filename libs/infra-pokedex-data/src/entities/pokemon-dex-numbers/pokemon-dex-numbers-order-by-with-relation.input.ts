import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import type { Identity } from 'identity-type';
import { PokemonSpeciesOrderByWithRelationInput } from '../pokemon-species/pokemon-species-order-by-with-relation.input';
import { PokedexesOrderByWithRelationInput } from '../pokedexes/pokedexes-order-by-with-relation.input';

@InputType()
export class PokemonDexNumbersOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    species_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokedex_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    pokedex_number?: `${SortOrder}`;

    @Field(() => PokemonSpeciesOrderByWithRelationInput, {nullable:true})
    species?: Identity<PokemonSpeciesOrderByWithRelationInput>;

    @Field(() => PokedexesOrderByWithRelationInput, {nullable:true})
    pokedex?: Identity<PokedexesOrderByWithRelationInput>;
}
