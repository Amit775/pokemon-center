import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutVersionGroupInput } from './machines-update-without-version-group.input';
import { MachinesCreateWithoutVersionGroupInput } from './machines-create-without-version-group.input';

@InputType()
export class MachinesUpsertWithWhereUniqueWithoutVersionGroupInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesUpdateWithoutVersionGroupInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutVersionGroupInput)
    update!: MachinesUpdateWithoutVersionGroupInput;

    @Field(() => MachinesCreateWithoutVersionGroupInput, {nullable:false})
    @Type(() => MachinesCreateWithoutVersionGroupInput)
    create!: MachinesCreateWithoutVersionGroupInput;
}
