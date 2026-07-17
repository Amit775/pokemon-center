import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutItemInput } from './machines-create-without-item.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutItemInput } from './machines-create-or-connect-without-item.input';
import { MachinesUpsertWithWhereUniqueWithoutItemInput } from './machines-upsert-with-where-unique-without-item.input';
import type { Identity } from 'identity-type';
import { MachinesCreateManyItemInputEnvelope } from './machines-create-many-item-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';
import { MachinesUpdateWithWhereUniqueWithoutItemInput } from './machines-update-with-where-unique-without-item.input';
import { MachinesUpdateManyWithWhereWithoutItemInput } from './machines-update-many-with-where-without-item.input';
import { MachinesScalarWhereInput } from './machines-scalar-where.input';

@InputType()
export class MachinesUpdateManyWithoutItemNestedInput {

    @Field(() => [MachinesCreateWithoutItemInput], {nullable:true})
    @Type(() => MachinesCreateWithoutItemInput)
    create?: Array<MachinesCreateWithoutItemInput>;

    @Field(() => [MachinesCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutItemInput>;

    @Field(() => [MachinesUpsertWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => MachinesUpsertWithWhereUniqueWithoutItemInput)
    upsert?: Array<MachinesUpsertWithWhereUniqueWithoutItemInput>;

    @Field(() => MachinesCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyItemInputEnvelope)
    createMany?: Identity<MachinesCreateManyItemInputEnvelope>;

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

    @Field(() => [MachinesUpdateWithWhereUniqueWithoutItemInput], {nullable:true})
    @Type(() => MachinesUpdateWithWhereUniqueWithoutItemInput)
    update?: Array<MachinesUpdateWithWhereUniqueWithoutItemInput>;

    @Field(() => [MachinesUpdateManyWithWhereWithoutItemInput], {nullable:true})
    @Type(() => MachinesUpdateManyWithWhereWithoutItemInput)
    updateMany?: Array<MachinesUpdateManyWithWhereWithoutItemInput>;

    @Field(() => [MachinesScalarWhereInput], {nullable:true})
    @Type(() => MachinesScalarWhereInput)
    deleteMany?: Array<MachinesScalarWhereInput>;
}
