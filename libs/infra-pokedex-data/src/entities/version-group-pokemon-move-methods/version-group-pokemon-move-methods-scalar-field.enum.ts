import { registerEnumType } from '@nestjs/graphql';

export enum VersionGroupPokemonMoveMethodsScalarFieldEnum {
    version_group_id = "version_group_id",
    pokemon_move_method_id = "pokemon_move_method_id"
}


registerEnumType(VersionGroupPokemonMoveMethodsScalarFieldEnum, { name: 'VersionGroupPokemonMoveMethodsScalarFieldEnum', description: undefined })
