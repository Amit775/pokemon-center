import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroups } from '../version-groups/version-groups.model';
import { Regions } from '../regions/regions.model';

/**
 * @@TypeGraphQL.type(name: "VersionGroupRegion")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "VersionGroupRegion")'})
export class VersionGroupRegions {

    @Field(() => ID, {nullable:false})
    version_group_id!: number;

    @Field(() => Int, {nullable:false})
    region_id!: number;

    @Field(() => VersionGroups, {nullable:false})
    versionGroup?: VersionGroups;

    @Field(() => Regions, {nullable:false})
    region?: Regions;
}
