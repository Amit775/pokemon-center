import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateOneRequiredWithoutMachinesNestedInput } from '../items/items-update-one-required-without-machines-nested.input';
import { MovesUpdateOneRequiredWithoutMachinesNestedInput } from '../moves/moves-update-one-required-without-machines-nested.input';

@InputType()
export class MachinesUpdateWithoutVersionGroupInput {

    @Field(() => Int, {nullable:true})
    machine_number?: number;

    @Field(() => ItemsUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    item?: Identity<ItemsUpdateOneRequiredWithoutMachinesNestedInput>;

    @Field(() => MovesUpdateOneRequiredWithoutMachinesNestedInput, {nullable:true})
    move?: Identity<MovesUpdateOneRequiredWithoutMachinesNestedInput>;
}
