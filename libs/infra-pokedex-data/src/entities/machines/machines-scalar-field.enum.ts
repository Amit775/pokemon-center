import { registerEnumType } from '@nestjs/graphql';

export enum MachinesScalarFieldEnum {
    machine_number = "machine_number",
    version_group_id = "version_group_id",
    item_id = "item_id",
    move_id = "move_id"
}


registerEnumType(MachinesScalarFieldEnum, { name: 'MachinesScalarFieldEnum', description: undefined })
