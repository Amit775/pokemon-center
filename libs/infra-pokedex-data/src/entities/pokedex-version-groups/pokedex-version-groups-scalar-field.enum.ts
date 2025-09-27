import { registerEnumType } from '@nestjs/graphql';

export enum PokedexVersionGroupsScalarFieldEnum {
    pokedex_id = "pokedex_id",
    version_group_id = "version_group_id"
}


registerEnumType(PokedexVersionGroupsScalarFieldEnum, { name: 'PokedexVersionGroupsScalarFieldEnum', description: undefined })
