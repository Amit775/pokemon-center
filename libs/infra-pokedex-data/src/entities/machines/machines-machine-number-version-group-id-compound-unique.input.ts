import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MachinesMachine_numberVersion_group_idCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    machine_number!: number;

    @Field(() => Int, {nullable:false})
    version_group_id!: number;
}
