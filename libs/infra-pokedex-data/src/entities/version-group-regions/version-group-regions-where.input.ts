import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { VersionGroupsScalarRelationFilter } from '../version-groups/version-groups-scalar-relation-filter.input';
import { RegionsScalarRelationFilter } from '../regions/regions-scalar-relation-filter.input';

@InputType()
export class VersionGroupRegionsWhereInput {

    @Field(() => [VersionGroupRegionsWhereInput], {nullable:true})
    AND?: Array<VersionGroupRegionsWhereInput>;

    @Field(() => [VersionGroupRegionsWhereInput], {nullable:true})
    OR?: Array<VersionGroupRegionsWhereInput>;

    @Field(() => [VersionGroupRegionsWhereInput], {nullable:true})
    NOT?: Array<VersionGroupRegionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    version_group_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    region_id?: IntFilter;

    @Field(() => VersionGroupsScalarRelationFilter, {nullable:true})
    versionGroup?: VersionGroupsScalarRelationFilter;

    @Field(() => RegionsScalarRelationFilter, {nullable:true})
    region?: RegionsScalarRelationFilter;
}
