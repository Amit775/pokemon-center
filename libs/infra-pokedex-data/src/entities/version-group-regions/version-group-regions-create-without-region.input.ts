import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput } from '../version-groups/version-groups-create-nested-one-without-version-group-regions.input';

@InputType()
export class VersionGroupRegionsCreateWithoutRegionInput {

    @Field(() => VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput;
}
