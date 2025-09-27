import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonSpeciesScalarRelationFilter } from '../pokemon-species/pokemon-species-scalar-relation-filter.input';
import { PokedexesScalarRelationFilter } from '../pokedexes/pokedexes-scalar-relation-filter.input';

@InputType()
export class PokemonDexNumbersWhereInput {

    @Field(() => [PokemonDexNumbersWhereInput], {nullable:true})
    AND?: Array<PokemonDexNumbersWhereInput>;

    @Field(() => [PokemonDexNumbersWhereInput], {nullable:true})
    OR?: Array<PokemonDexNumbersWhereInput>;

    @Field(() => [PokemonDexNumbersWhereInput], {nullable:true})
    NOT?: Array<PokemonDexNumbersWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    species_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    pokedex_number?: IntFilter;

    @Field(() => PokemonSpeciesScalarRelationFilter, {nullable:true})
    species?: PokemonSpeciesScalarRelationFilter;

    @Field(() => PokedexesScalarRelationFilter, {nullable:true})
    pokedex?: PokedexesScalarRelationFilter;
}
