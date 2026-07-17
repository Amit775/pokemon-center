import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutMoveInput } from './machines-create-without-move.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutMoveInput } from './machines-create-or-connect-without-move.input';
import { MachinesUpsertWithWhereUniqueWithoutMoveInput } from './machines-upsert-with-where-unique-without-move.input';
import { MachinesCreateManyMoveInputEnvelope } from './machines-create-many-move-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutMoveInput } from './machines-update-with-where-unique-without-move.input';
import { MachinesUpdateManyWithWhereWithoutMoveInput } from './machines-update-many-with-where-without-move.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUncheckedUpdateManyWithoutMoveNestedInput {

    @Field(() => [MachinesCreateWithoutMoveInput], {nullable:true})
    @Type(() => MachinesCreateWithoutMoveInput)
    create?: Array<MachinesCreateWithoutMoveInput>;

    @Field(() => [MachinesCreateOrConnectWithoutMoveInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutMoveInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutMoveInput>;

    @Field(() => [MachinesUpsertWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => MachinesUpsertWithWhereUniqueWithoutMoveInput)
    upsert?: Array<MachinesUpsertWithWhereUniqueWithoutMoveInput>;

    @Field(() => MachinesCreateManyMoveInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyMoveInputEnvelope)
    createMany?: MachinesCreateManyMoveInputEnvelope;

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

    @Field(() => [MachinesUpdateWithWhereUniqueWithoutMoveInput], {nullable:true})
    @Type(() => MachinesUpdateWithWhereUniqueWithoutMoveInput)
    update?: Array<MachinesUpdateWithWhereUniqueWithoutMoveInput>;

    @Field(() => [MachinesUpdateManyWithWhereWithoutMoveInput], {nullable:true})
    @Type(() => MachinesUpdateManyWithWhereWithoutMoveInput)
    updateMany?: Array<MachinesUpdateManyWithWhereWithoutMoveInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    @Type(() => MachinesScalarWhereInput)
    deleteMany?: Array<MachinesScalarWhereInput>;
}
