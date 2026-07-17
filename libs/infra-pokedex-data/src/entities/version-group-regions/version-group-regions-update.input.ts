import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-regions-nested.input';
import { RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../regions/regions-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupRegionsUpdateInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput;

    @Field(() => RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    region?: RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput;
}
