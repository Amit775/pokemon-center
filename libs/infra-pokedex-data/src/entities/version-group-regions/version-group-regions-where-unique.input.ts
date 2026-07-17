import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroupRegionsWhereInput } from './version-group-regions-where.input';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { RegionsScalarRelationFilter } from '../regions/regions-scalar-relation-filter.input';

@InputType()
export class VersionGroupRegionsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => [VersionGroupRegionsWhereInput], {nullable:true})
    AND?: Array<VersionGroupRegionsWhereInput>;

    @Field(() => [VersionGroupRegionsWhereInput], {nullable:true})
    OR?: Array<VersionGroupRegionsWhereInput>;

    @Field(() => [VersionGroupRegionsWhereInput], {nullable:true})
    NOT?: Array<VersionGroupRegionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    region_id?: Identity<IntFilter>;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: Identity<VersionGroupsScalarRelationFilter>;

    @Field(() => RegionsScalarRelationFilter, {nullable:true})
    region?: Identity<RegionsScalarRelationFilter>;
}
