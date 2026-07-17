import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MachinesUpdateWithoutMoveInput } from './machines-update-without-move.input';

@InputType()
export class MachinesUpdateWithWhereUniqueWithoutMoveInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesUpdateWithoutMoveInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutMoveInput)
    data!: Identity<MachinesUpdateWithoutMoveInput>;
}
