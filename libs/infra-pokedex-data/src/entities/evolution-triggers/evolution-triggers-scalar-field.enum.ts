import { registerEnumType } from '@nestjs/graphql';

export enum EvolutionTriggersScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(EvolutionTriggersScalarFieldEnum, { name: 'EvolutionTriggersScalarFieldEnum', description: undefined })
