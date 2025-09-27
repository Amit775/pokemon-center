import { registerEnumType } from '@nestjs/graphql';

export enum ContestEffectsScalarFieldEnum {
    id = "id",
    appeal = "appeal",
    jam = "jam"
}


registerEnumType(ContestEffectsScalarFieldEnum, { name: 'ContestEffectsScalarFieldEnum', description: undefined })
