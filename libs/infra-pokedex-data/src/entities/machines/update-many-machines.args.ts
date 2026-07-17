import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesUpdateManyMutationInput } from './machines-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MachinesWhereInput } from './machines-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyMachinesArgs {

    @Field(() => MachinesUpdateManyMutationInput, {nullable:false})
    @Type(() => MachinesUpdateManyMutationInput)
    data!: MachinesUpdateManyMutationInput;

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: MachinesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
