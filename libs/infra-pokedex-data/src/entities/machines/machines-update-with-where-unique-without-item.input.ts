import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutItemInput } from './machines-update-without-item.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesUpdateWithoutItemInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutItemInput)
    data!: MachinesUpdateWithoutItemInput;
}
