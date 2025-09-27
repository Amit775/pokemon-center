import { registerEnumType } from '@nestjs/graphql';

export enum PokemonFormGenerationsScalarFieldEnum {
    pokemon_form_id = "pokemon_form_id",
    generation_id = "generation_id",
    game_index = "game_index"
}


registerEnumType(PokemonFormGenerationsScalarFieldEnum, { name: 'PokemonFormGenerationsScalarFieldEnum', description: undefined })
