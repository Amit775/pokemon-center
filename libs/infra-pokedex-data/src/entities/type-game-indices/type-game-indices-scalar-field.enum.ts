import { registerEnumType } from '@nestjs/graphql';

export enum TypeGameIndicesScalarFieldEnum {
    type_id = "type_id",
    generation_id = "generation_id",
    game_index = "game_index"
}


registerEnumType(TypeGameIndicesScalarFieldEnum, { name: 'TypeGameIndicesScalarFieldEnum', description: undefined })
