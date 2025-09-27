import { registerEnumType } from '@nestjs/graphql';

export enum GenerationsScalarFieldEnum {
    id = "id",
    main_region_id = "main_region_id",
    identifier = "identifier"
}


registerEnumType(GenerationsScalarFieldEnum, { name: 'GenerationsScalarFieldEnum', description: undefined })
