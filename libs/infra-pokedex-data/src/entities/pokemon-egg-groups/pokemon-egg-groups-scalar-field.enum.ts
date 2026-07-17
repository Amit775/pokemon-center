import { registerEnumType } from '@nestjs/graphql';

export enum PokemonEggGroupsScalarFieldEnum {
    species_id = "species_id",
    egg_group_id = "egg_group_id"
}


registerEnumType(PokemonEggGroupsScalarFieldEnum, { name: 'PokemonEggGroupsScalarFieldEnum', description: undefined })
