import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class MachinesUpdateManyMutationInput {

    @Field(() => Int, {nullable:true})
    machine_number?: number;
}
