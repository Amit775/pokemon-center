import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaStatChangesCreateWithoutMetaInput } from './move-meta-stat-changes-create-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesCreateOrConnectWithoutMetaInput } from './move-meta-stat-changes-create-or-connect-without-meta.input';
import { MoveMetaStatChangesCreateManyMetaInputEnvelope } from './move-meta-stat-changes-create-many-meta-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';

@InputType()
export class MoveMetaStatChangesCreateNestedManyWithoutMetaInput {

    @Field(() => [MoveMetaStatChangesCreateWithoutMetaInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateWithoutMetaInput)
    create?: Array<MoveMetaStatChangesCreateWithoutMetaInput>;

    @Field(() => [MoveMetaStatChangesCreateOrConnectWithoutMetaInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateOrConnectWithoutMetaInput)
    connectOrCreate?: Array<MoveMetaStatChangesCreateOrConnectWithoutMetaInput>;

    @Field(() => MoveMetaStatChangesCreateManyMetaInputEnvelope, {nullable:true})
    @Type(() => MoveMetaStatChangesCreateManyMetaInputEnvelope)
    createMany?: MoveMetaStatChangesCreateManyMetaInputEnvelope;

    @Field(() => [MoveMetaStatChangesWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>>;
}
