import { registerEnumType } from '@nestjs/graphql';

export enum PokemonAbilitiesScalarFieldEnum {
    pokemon_id = "pokemon_id",
    ability_id = "ability_id",
    is_hidden = "is_hidden",
    slot = "slot"
}


registerEnumType(PokemonAbilitiesScalarFieldEnum, { name: 'PokemonAbilitiesScalarFieldEnum', description: undefined })
