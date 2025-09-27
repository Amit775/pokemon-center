import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonDexNumbersSpecies_idPokedex_idCompoundUniqueInput } from './pokemon-dex-numbers-species-id-pokedex-id-compound-unique.input';
import { PokemonDexNumbersWhereInput } from './pokemon-dex-numbers-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonSpeciesScalarRelationFilter } from '../pokemon-species/pokemon-species-scalar-relation-filter.input';
import { PokedexesScalarRelationFilter } from '../pokedexes/pokedexes-scalar-relation-filter.input';

@InputType()
export class PokemonDexNumbersWhereUniqueInput {

    @Field(() => PokemonDexNumbersSpecies_idPokedex_idCompoundUniqueInput, {nullable:true})
    species_id_pokedex_id?: PokemonDexNumbersSpecies_idPokedex_idCompoundUniqueInput;

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
