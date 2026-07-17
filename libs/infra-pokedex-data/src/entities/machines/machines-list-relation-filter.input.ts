import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MachinesWhereInput } from './machines-where.input';

@InputType()
export class MachinesListRelationFilter {

    @Field(() => MachinesWhereInput, {nullable:true})
    every?: Identity<MachinesWhereInput>;

    @Field(() => MachinesWhereInput, {nullable:true})
    some?: Identity<MachinesWhereInput>;

    @Field(() => MachinesWhereInput, {nullable:true})
    none?: Identity<MachinesWhereInput>;
}
