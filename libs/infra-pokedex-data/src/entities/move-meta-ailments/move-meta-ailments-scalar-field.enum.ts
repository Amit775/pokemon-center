import { registerEnumType } from '@nestjs/graphql';

export enum MoveMetaAilmentsScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(MoveMetaAilmentsScalarFieldEnum, { name: 'MoveMetaAilmentsScalarFieldEnum', description: undefined })
