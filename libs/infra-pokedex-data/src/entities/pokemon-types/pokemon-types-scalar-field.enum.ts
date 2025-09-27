import { registerEnumType } from '@nestjs/graphql';

export enum PokemonTypesScalarFieldEnum {
    pokemon_id = "pokemon_id",
    type_id = "type_id",
    slot = "slot"
}


registerEnumType(PokemonTypesScalarFieldEnum, { name: 'PokemonTypesScalarFieldEnum', description: undefined })
