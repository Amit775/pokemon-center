import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MachinesUpdateWithoutItemInput } from './machines-update-without-item.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesUpdateWithoutItemInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutItemInput)
    data!: Identity<MachinesUpdateWithoutItemInput>;
}
