import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../regions/regions-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupRegionsUpdateWithoutVersionGroupInput {

    @Field(() => RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    region?: RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput;
}
