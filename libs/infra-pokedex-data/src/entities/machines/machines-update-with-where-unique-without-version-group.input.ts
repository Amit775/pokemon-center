import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutVersionGroupInput } from './machines-update-without-version-group.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutVersionGroupInput)
    data!: MachinesUpdateWithoutVersionGroupInput;
}
