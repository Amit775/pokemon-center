import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-regions-nested.input';
import { RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../regions/regions-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupRegionsUpdateInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput>;

    @Field(() => RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    region?: Identity<RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput>;
}
