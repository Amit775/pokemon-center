import { registerEnumType } from '@nestjs/graphql';

export enum PokemonFormTypesScalarFieldEnum {
    pokemon_form_id = "pokemon_form_id",
    type_id = "type_id",
    slot = "slot"
}


registerEnumType(PokemonFormTypesScalarFieldEnum, { name: 'PokemonFormTypesScalarFieldEnum', description: undefined })
