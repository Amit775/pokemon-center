import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MachinesUncheckedUpdateWithoutItemInput {

    @Field(() => Int, {nullable:true})
    machine_number?: number;

    @Field(() => Int, {nullable:true})
    version_group_id?: number;

    @Field(() => Int, {nullable:true})
    move_id?: number;
}
