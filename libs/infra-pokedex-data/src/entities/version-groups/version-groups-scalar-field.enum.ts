import { registerEnumType } from '@nestjs/graphql';

export enum VersionGroupsScalarFieldEnum {
    id = "id",
    identifier = "identifier",
    generation_id = "generation_id",
    order = "order"
}


registerEnumType(VersionGroupsScalarFieldEnum, { name: 'VersionGroupsScalarFieldEnum', description: undefined })
