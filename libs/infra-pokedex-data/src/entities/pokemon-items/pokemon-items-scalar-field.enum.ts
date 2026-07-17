import { registerEnumType } from '@nestjs/graphql';

export enum PokemonItemsScalarFieldEnum {
    pokemon_id = "pokemon_id",
    version_id = "version_id",
    item_id = "item_id",
    rarity = "rarity"
}


registerEnumType(PokemonItemsScalarFieldEnum, { name: 'PokemonItemsScalarFieldEnum', description: undefined })
