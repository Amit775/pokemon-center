import { registerEnumType } from '@nestjs/graphql';

export enum SuperContestCombosScalarFieldEnum {
    first_move_id = "first_move_id",
    second_move_id = "second_move_id"
}


registerEnumType(SuperContestCombosScalarFieldEnum, { name: 'SuperContestCombosScalarFieldEnum', description: undefined })
