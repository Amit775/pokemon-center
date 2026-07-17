import { registerEnumType } from '@nestjs/graphql';

export enum LocationAreasScalarFieldEnum {
    id = "id",
    location_id = "location_id",
    game_index = "game_index",
    identifier = "identifier"
}


registerEnumType(LocationAreasScalarFieldEnum, { name: 'LocationAreasScalarFieldEnum', description: undefined })
