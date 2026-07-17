import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { RegionsCreateNestedOneWithoutVersionGroupsInput } from '../regions/regions-create-nested-one-without-version-groups.input';

@InputType()
export class VersionGroupRegionsCreateWithoutVersionGroupInput {

    @Field(() => RegionsCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    region!: Identity<RegionsCreateNestedOneWithoutVersionGroupsInput>;
}
