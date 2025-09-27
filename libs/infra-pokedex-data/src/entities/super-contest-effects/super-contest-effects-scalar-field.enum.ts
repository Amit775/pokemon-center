import { registerEnumType } from '@nestjs/graphql';

export enum SuperContestEffectsScalarFieldEnum {
    id = "id",
    appeal = "appeal"
}


registerEnumType(SuperContestEffectsScalarFieldEnum, { name: 'SuperContestEffectsScalarFieldEnum', description: undefined })
