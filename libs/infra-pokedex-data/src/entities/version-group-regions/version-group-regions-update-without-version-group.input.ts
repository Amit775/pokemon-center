import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../regions/regions-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupRegionsUpdateWithoutVersionGroupInput {

    @Field(() => RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    region?: Identity<RegionsUpdateOneRequiredWithoutVersionGroupsNestedInput>;
}
