import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaStatChangesCreateWithoutStatInput } from './move-meta-stat-changes-create-without-stat.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesCreateOrConnectWithoutStatInput } from './move-meta-stat-changes-create-or-connect-without-stat.input';
import { MoveMetaStatChangesCreateManyStatInputEnvelope } from './move-meta-stat-changes-create-many-stat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';

@InputType()
export class MoveMetaStatChangesUncheckedCreateNestedManyWithoutStatInput {

    @Field(() => [MoveMetaStatChangesCreateWithoutStatInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateWithoutStatInput)
    create?: Array<MoveMetaStatChangesCreateWithoutStatInput>;

    @Field(() => [MoveMetaStatChangesCreateOrConnectWithoutStatInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateOrConnectWithoutStatInput)
    connectOrCreate?: Array<MoveMetaStatChangesCreateOrConnectWithoutStatInput>;

    @Field(() => MoveMetaStatChangesCreateManyStatInputEnvelope, {nullable:true})
    @Type(() => MoveMetaStatChangesCreateManyStatInputEnvelope)
    createMany?: MoveMetaStatChangesCreateManyStatInputEnvelope;

    @Field(() => [MoveMetaStatChangesWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>>;
}
