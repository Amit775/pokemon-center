import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput } from '../version-groups/version-groups-create-nested-one-without-version-group-regions.input';

@InputType()
export class VersionGroupRegionsCreateWithoutRegionInput {

    @Field(() => VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput, {nullable:false})
    versionGroup!: Identity<VersionGroupsCreateNestedOneWithoutVersionGroupRegionsInput>;
}
