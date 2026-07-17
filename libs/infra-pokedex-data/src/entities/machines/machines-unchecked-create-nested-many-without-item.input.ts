import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MachinesCreateWithoutItemInput } from './machines-create-without-item.input';
import { Type } from 'class-transformer';
import { MachinesCreateOrConnectWithoutItemInput } from './machines-create-or-connect-without-item.input';
import { MachinesCreateManyItemInputEnvelope } from './machines-create-many-item-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MachinesWhereUniqueInput } from './machines-where-unique.input';

@InputType()
export class MachinesUncheckedCreateNestedManyWithoutItemInput {

    @Field(() => [MachinesCreateWithoutItemInput], {nullable:true})
    @Type(() => MachinesCreateWithoutItemInput)
    create?: Array<MachinesCreateWithoutItemInput>;

    @Field(() => [MachinesCreateOrConnectWithoutItemInput], {nullable:true})
    @Type(() => MachinesCreateOrConnectWithoutItemInput)
    connectOrCreate?: Array<MachinesCreateOrConnectWithoutItemInput>;

    @Field(() => MachinesCreateManyItemInputEnvelope, {nullable:true})
    @Type(() => MachinesCreateManyItemInputEnvelope)
    createMany?: MachinesCreateManyItemInputEnvelope;

    @Field(() => [MachinesWhereUniqueInput], {nullable:true})
    @Type(() => MachinesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MachinesWhereUniqueInput, 'machine_number_version_group_id'>>;
}
