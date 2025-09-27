import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { VersionGroupsOrderByWithRelationInput } from '../version-groups/version-groups-order-by-with-relation.input';
import { RegionsOrderByWithRelationInput } from '../regions/regions-order-by-with-relation.input';

@InputType()
export class VersionGroupRegionsOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    version_group_id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    region_id?: `${SortOrder}`;

    @Field(() => VersionGroupsOrderByWithRelationInput, {nullable:true})
    versionGroup?: VersionGroupsOrderByWithRelationInput;

    @Field(() => RegionsOrderByWithRelationInput, {nullable:true})
    region?: RegionsOrderByWithRelationInput;
}
