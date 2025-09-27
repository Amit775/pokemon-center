import { registerEnumType } from '@nestjs/graphql';

export enum LocationGameIndicesScalarFieldEnum {
    location_id = "location_id",
    generation_id = "generation_id",
    game_index = "game_index"
}


registerEnumType(LocationGameIndicesScalarFieldEnum, { name: 'LocationGameIndicesScalarFieldEnum', description: undefined })
