import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMachinesArgs {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;
}
