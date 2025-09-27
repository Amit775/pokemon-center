import { registerEnumType } from '@nestjs/graphql';

export enum PokemonStatsScalarFieldEnum {
    pokemon_id = "pokemon_id",
    stat_id = "stat_id",
    base_stat = "base_stat",
    effort = "effort"
}


registerEnumType(PokemonStatsScalarFieldEnum, { name: 'PokemonStatsScalarFieldEnum', description: undefined })
