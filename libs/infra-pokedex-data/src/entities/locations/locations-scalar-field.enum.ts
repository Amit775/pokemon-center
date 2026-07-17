import { registerEnumType } from '@nestjs/graphql';

export enum LocationsScalarFieldEnum {
    id = "id",
    region_id = "region_id",
    identifier = "identifier"
}


registerEnumType(LocationsScalarFieldEnum, { name: 'LocationsScalarFieldEnum', description: undefined })
