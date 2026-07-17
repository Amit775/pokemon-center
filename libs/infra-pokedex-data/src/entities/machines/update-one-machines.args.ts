import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MachinesUpdateInput } from './machines-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@ArgsType()
export class UpdateOneMachinesArgs {

    @Field(() => MachinesUpdateInput, {nullable:false})
    @Type(() => MachinesUpdateInput)
    data!: Identity<MachinesUpdateInput>;

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;
}
