import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-regions-nested.input';

@InputType()
export class VersionGroupRegionsUpdateWithoutRegionInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupRegionsNestedInput;
}
