import { registerEnumType } from '@nestjs/graphql';

export enum MoveFlagMapScalarFieldEnum {
    move_id = "move_id",
    move_flag_id = "move_flag_id"
}


registerEnumType(MoveFlagMapScalarFieldEnum, { name: 'MoveFlagMapScalarFieldEnum', description: undefined })
