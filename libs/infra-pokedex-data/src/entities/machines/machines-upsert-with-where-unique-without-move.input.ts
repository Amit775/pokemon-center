import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { MachinesUpdateWithoutMoveInput } from './machines-update-without-move.input';
import { MachinesCreateWithoutMoveInput } from './machines-create-without-move.input';

@InputType()
export class MachinesUpsertWithWhereUniqueWithoutMoveInput {

    @Field(() => MachinesWhereUniqueInput, {nullable:false})
    @Type(() => MachinesWhereUniqueInput)
    where!: Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>;

    @Field(() => MachinesUpdateWithoutMoveInput, {nullable:false})
    @Type(() => MachinesUpdateWithoutMoveInput)
    update!: MachinesUpdateWithoutMoveInput;

    @Field(() => MachinesCreateWithoutMoveInput, {nullable:false})
    @Type(() => MachinesCreateWithoutMoveInput)
    create!: MachinesCreateWithoutMoveInput;
}
