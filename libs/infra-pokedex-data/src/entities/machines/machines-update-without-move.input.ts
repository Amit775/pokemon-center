import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput } from '../version-groups/version-groups-update-one-required-without-machines-nested.input';
import { ItemsUpdateOneRequiredWithoutMachinesNestedInput } from '../items/items-update-one-required-without-machines-nested.input';

@InputType()
export class MachinesUpdateWithoutMoveInput {

    @Field(() => Int, {nullable:true})
    machine_number?: number;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutMachinesNestedInput>;

    @Field(() => ItemsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    item?: Identity<ItemsUpdateOneRequiredWithoutMachinesNestedInput>;
}
