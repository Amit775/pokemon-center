import { registerEnumType } from '@nestjs/graphql';

export enum ContestCombosScalarFieldEnum {
    first_move_id = "first_move_id",
    second_move_id = "second_move_id"
}


registerEnumType(ContestCombosScalarFieldEnum, { name: 'ContestCombosScalarFieldEnum', description: undefined })
