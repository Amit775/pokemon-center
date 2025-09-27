import { registerEnumType } from '@nestjs/graphql';

export enum EvolutionChainsScalarFieldEnum {
    id = "id",
    baby_trigger_item_id = "baby_trigger_item_id"
}


registerEnumType(EvolutionChainsScalarFieldEnum, { name: 'EvolutionChainsScalarFieldEnum', description: undefined })
