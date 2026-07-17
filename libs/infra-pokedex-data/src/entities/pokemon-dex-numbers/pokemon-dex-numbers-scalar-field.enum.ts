import { registerEnumType } from '@nestjs/graphql';

export enum PokemonDexNumbersScalarFieldEnum {
    species_id = "species_id",
    pokedex_id = "pokedex_id",
    pokedex_number = "pokedex_number"
}


registerEnumType(PokemonDexNumbersScalarFieldEnum, { name: 'PokemonDexNumbersScalarFieldEnum', description: undefined })
