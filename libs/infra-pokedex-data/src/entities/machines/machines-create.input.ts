import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateNestedOneWithoutMachinesInput } from '../version-groups/version-groups-create-nested-one-without-machines.input';
import { ItemsCreateNestedOneWithoutMachinesInput } from '../items/items-create-nested-one-without-machines.input';
import { MovesCreateNestedOneWithoutMachinesInput } from '../moves/moves-create-nested-one-without-machines.input';

@InputType()
export class MachinesCreateInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => VersionGroupsCreateNestedOneWithoutMachinesInput, {nullable:false})
    versionGroup!: Identity<VersionGroupsCreateNestedOneWithoutMachinesInput>;

    @Field(() => ItemsCreateNestedOneWithoutMachinesInput, {nullable:false})
    item!: Identity<ItemsCreateNestedOneWithoutMachinesInput>;

    @Field(() => MovesCreateNestedOneWithoutMachinesInput, {nullable:false})
    move!: Identity<MovesCreateNestedOneWithoutMachinesInput>;
}
