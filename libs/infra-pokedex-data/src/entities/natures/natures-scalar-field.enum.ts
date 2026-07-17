import { registerEnumType } from '@nestjs/graphql';

export enum NaturesScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    decreased_stat_id = "decreased_stat_id",
    increased_stat_id = "increased_stat_id",
    hates_flavor_id = "hates_flavor_id",
    likes_flavor_id = "likes_flavor_id",
    game_index = "game_index"
}


registerEnumType(NaturesScalarFieldEnum, { name: 'NaturesScalarFieldEnum', description: undefined })
