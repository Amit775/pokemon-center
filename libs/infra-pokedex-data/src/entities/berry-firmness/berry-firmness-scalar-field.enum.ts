import { registerEnumType } from '@nestjs/graphql';

export enum BerryFirmnessScalarFieldEnum {
    id = "id",
    identifier = "identifier"
}


registerEnumType(BerryFirmnessScalarFieldEnum, { name: 'BerryFirmnessScalarFieldEnum', description: undefined })
