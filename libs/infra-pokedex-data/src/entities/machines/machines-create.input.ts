import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { VersionGroupsCreateNestedOneWithoutMachinesInput } from '../version-groups/version-groups-create-nested-one-without-machines.input';
import { ItemsCreateNestedOneWithoutMachinesInput } from '../items/items-create-nested-one-without-machines.input';
import { MovesCreateNestedOneWithoutMachinesInput } from '../moves/moves-create-nested-one-without-machines.input';

@InputType()
export class MachinesCreateInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => VersionGroupsCreateNestedOneWithoutMachinesInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutMachinesInput;

    @Field(() => ItemsCreateNestedOneWithoutMachinesInput, {nullable:false})
    item!: ItemsCreateNestedOneWithoutMachinesInput;

    @Field(() => MovesCreateNestedOneWithoutMachinesInput, {nullable:false})
    move!: MovesCreateNestedOneWithoutMachinesInput;
}
