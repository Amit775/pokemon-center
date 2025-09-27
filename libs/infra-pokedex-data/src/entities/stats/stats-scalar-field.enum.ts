import { registerEnumType } from '@nestjs/graphql';

export enum StatsScalarFieldEnum {
    id = "id",
    damage_class_id = "damage_class_id",
    identifier = "identifier",
    is_battle_only = "is_battle_only",
    game_index = "game_index"
}


registerEnumType(StatsScalarFieldEnum, { name: 'StatsScalarFieldEnum', description: undefined })
