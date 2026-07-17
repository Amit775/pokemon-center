import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateWithoutVersionGroupInput } from './machines-create-without-version-group.input';

@InputType()
export class MachinesCreateOrConnectWithoutVersionGroupInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => MachinesCreateWithoutVersionGroupInput)
    create!: MachinesCreateWithoutVersionGroupInput;
}
