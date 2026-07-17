import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutVersionGroupInput } from './machines-create-without-version-group.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutVersionGroupInput } from './machines-create-or-connect-without-version-group.input';
import { MachinesCreateManyVersionGroupInputEnvelope } from './machines-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [MachinesCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => MachinesCreateWithoutVersionGroupInput)
    create?: Array<MachinesCreateWithoutVersionGroupInput>;

    @Field(() => [MachinesCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => MachinesCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyVersionGroupInputEnvelope)
    createMany?: MachinesCreateManyVersionGroupInputEnvelope;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>>;
}
