import { registerEnumType } from '@nestjs/graphql';

export enum PokemonGameIndicesScalarFieldEnum {
    pokemon_id = "pokemon_id",
    version_id = "version_id",
    game_index = "game_index"
}


registerEnumType(PokemonGameIndicesScalarFieldEnum, { name: 'PokemonGameIndicesScalarFieldEnum', description: undefined })
