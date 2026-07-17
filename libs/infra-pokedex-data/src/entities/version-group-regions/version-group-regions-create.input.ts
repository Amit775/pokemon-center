import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput } from '../version-groups/version-groups-create-nested-one-without-version-group-regions.input';
import { RegionsCreateNestedOneWithoutVersionGroupsInput } from '../regions/regions-create-nested-one-without-version-groups.input';

@InputType()
export class VersionGroupRegionsCreateInput {

    @Field(() => VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput;

    @Field(() => RegionsCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    region!: RegionsCreateNestedOneWithoutVersionGroupsInput;
}
