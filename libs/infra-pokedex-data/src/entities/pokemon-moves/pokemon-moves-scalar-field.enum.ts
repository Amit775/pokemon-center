import { registerEnumType } from '@nestjs/graphql';

export enum PokemonMovesScalarFieldEnum {
    pokemon_id = "pokemon_id",
    version_group_id = "version_group_id",
    move_id = "move_id",
    pokemon_move_method_id = "pokemon_move_method_id",
    level = "level",
    order = "order",
    mastery = "mastery"
}


registerEnumType(PokemonMovesScalarFieldEnum, { name: 'PokemonMovesScalarFieldEnum', description: undefined })
