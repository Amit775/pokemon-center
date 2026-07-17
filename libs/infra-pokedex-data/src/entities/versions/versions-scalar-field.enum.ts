import { registerEnumType } from '@nestjs/graphql';

export enum VersionsScalarFieldEnum {
    id = "id",
    version_group_id = "version_group_id",
    identifier = "identifier"
}


registerEnumType(VersionsScalarFieldEnum, { name: 'VersionsScalarFieldEnum', description: undefined })
