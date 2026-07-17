import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutMoveInput } from './machines-create-without-move.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutMoveInput } from './machines-create-or-connect-without-move.input';
import { MachinesCreateManyMoveInputEnvelope } from './machines-create-many-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesUncheckedCreateNestedManyWithoutMoveInput {

    @Field(() => [MachinesCreateWithoutMoveInput], {nullable:true})
    @Type(() => MachinesCreateWithoutMoveInput)
    create?: Array<MachinesCreateWithoutMoveInput>;

    @Field(() => [MachinesCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutMoveInput>;

    @Field(() => MachinesCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyMoveInputEnvelope)
    createMany?: MachinesCreateManyMoveInputEnvelope;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>>;
}
