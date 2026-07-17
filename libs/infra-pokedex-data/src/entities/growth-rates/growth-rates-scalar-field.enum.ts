import { registerEnumType } from '@nestjs/graphql';

export enum GrowthRatesScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    formula = "formula"
}


registerEnumType(GrowthRatesScalarFieldEnum, { name: 'GrowthRatesScalarFieldEnum', description: undefined })
