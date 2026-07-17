import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutVersionGroupInput } from './machines-create-without-version-group.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutVersionGroupInput } from './machines-create-or-connect-without-version-group.input';
import { MachinesUpsertWithWhereUniqueWithoutVersionGroupInput } from './machines-upsert-with-where-unique-without-version-group.input';
import type { Identity } from 'identity-type';
import { MachinesCreateManyVersionGroupInputEnvelope } from './machines-create-many-version-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutVersionGroupInput } from './machines-update-with-where-unique-without-version-group.input';
import { MachinesUpdateManyWithWhereWithoutVersionGroupInput } from './machines-update-many-with-where-without-version-group.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUncheckedUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [MachinesCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => MachinesCreateWithoutVersionGroupInput)
    create?: Array<MachinesCreateWithoutVersionGroupInput>;

    @Field(() => [MachinesCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [MachinesUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => MachinesUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<MachinesUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => MachinesCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyVersionGroupInputEnvelope)
    createMany?: Identity<MachinesCreateManyVersionGroupInputEnvelope>;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>>;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>>;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>>;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>>;

    @Field(() => [MachinesUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => MachinesUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<MachinesUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [MachinesUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => MachinesUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<MachinesUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    @Type(() => MachinesScalarWhereInput)
    deleteMany?: Array<MachinesScalarWhereInput>;
}
