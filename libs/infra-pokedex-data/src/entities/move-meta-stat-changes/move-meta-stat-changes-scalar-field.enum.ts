import { registerEnumType } from '@nestjs/graphql';

export enum MoveMetaStatChangesScalarFieldEnum {
    move_id = "move_id",
    stat_id = "stat_id",
    change = "change"
}


registerEnumType(MoveMetaStatChangesScalarFieldEnum, { name: 'MoveMetaStatChangesScalarFieldEnum', description: undefined })
