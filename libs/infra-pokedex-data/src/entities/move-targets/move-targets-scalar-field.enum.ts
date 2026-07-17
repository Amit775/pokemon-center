import { registerEnumType } from '@nestjs/graphql';

export enum MoveTargetsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(MoveTargetsScalarFieldEnum, { name: 'MoveTargetsScalarFieldEnum', description: undefined })
