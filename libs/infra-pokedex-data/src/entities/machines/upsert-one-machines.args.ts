import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesCreateInput } from './machines-create.input';
import { MachinesUpdateInput } from './machines-update.input';

@ArgsType()
export class UpsertOneMachinesArgs {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesCreateInput, {nullable:false})
    @Type(() => MachinesCreateInput)
    create!: MachinesCreateInput;

    @Field(() => MachinesUpdateInput, {nullable:false})
    @Type(() => MachinesUpdateInput)
    update!: MachinesUpdateInput;
}
