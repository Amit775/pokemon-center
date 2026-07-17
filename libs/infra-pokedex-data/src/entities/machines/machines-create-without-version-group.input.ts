import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ItemsCreateNestedOneWithoutMachinesInput } from '../items/items-create-nested-one-without-machines.input';
import { MovesCreateNestedOneWithoutMachinesInput } from '../moves/moves-create-nested-one-without-machines.input';

@InputType()
export class MachinesCreateWithoutVersionGroupInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => ItemsCreateNestedOneWithoutMachinesInput, {nullable:false})
    item!: ItemsCreateNestedOneWithoutMachinesInput;

    @Field(() => MovesCreateNestedOneWithoutMachinesInput, {nullable:false})
    move!: MovesCreateNestedOneWithoutMachinesInput;
}
