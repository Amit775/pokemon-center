import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MachinesWhereInput } from './machines-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyMachinesArgs {

    @Field(() => MachinesWhereInput, {nullable:true})
    @Type(() => MachinesWhereInput)
    where?: MachinesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
