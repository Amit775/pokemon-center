import { registerEnumType } from '@nestjs/graphql';

export enum VersionGroupRegionsScalarFieldEnum {
    version_group_id = "version_group_id",
    region_id = "region_id"
}


registerEnumType(VersionGroupRegionsScalarFieldEnum, { name: 'VersionGroupRegionsScalarFieldEnum', description: undefined })
