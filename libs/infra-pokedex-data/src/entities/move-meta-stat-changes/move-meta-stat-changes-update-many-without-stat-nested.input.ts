import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaStatChangesCreateWithoutStatInput } from './move-meta-stat-changes-create-without-stat.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesCreateOrConnectWithoutStatInput } from './move-meta-stat-changes-create-or-connect-without-stat.input';
import { MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput } from './move-meta-stat-changes-upsert-with-where-unique-without-stat.input';
import { MoveMetaStatChangesCreateManyStatInputEnvelope } from './move-meta-stat-changes-create-many-stat-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput } from './move-meta-stat-changes-update-with-where-unique-without-stat.input';
import { MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput } from './move-meta-stat-changes-update-many-with-where-without-stat.input';
import { MoveMetaStatChangesScalarWhereInput } from './move-meta-stat-changes-scalar-where.input';

@InputType()
export class MoveMetaStatChangesUpdateManyWithoutStatNestedInput {

    @Field(() => [MoveMetaStatChangesCreateWithoutStatInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateWithoutStatInput)
    create?: Array<MoveMetaStatChangesCreateWithoutStatInput>;

    @Field(() => [MoveMetaStatChangesCreateOrConnectWithoutStatInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateOrConnectWithoutStatInput)
    connectOrCreate?: Array<MoveMetaStatChangesCreateOrConnectWithoutStatInput>;

    @Field(() => [MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput], {nullable:true})
    @Type(() => MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput)
    upsert?: Array<MoveMetaStatChangesUpsertWithWhereUniqueWithoutStatInput>;

    @Field(() => MoveMetaStatChangesCreateManyStatInputEnvelope, {nullable:true})
    @Type(() => MoveMetaStatChangesCreateManyStatInputEnvelope)
    createMany?: MoveMetaStatChangesCreateManyStatInputEnvelope;

    @Field(() => [MoveMetaStatChangesWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>>;

    @Field(() => [MoveMetaStatChangesWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>>;

    @Field(() => [MoveMetaStatChangesWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>>;

    @Field(() => [MoveMetaStatChangesWhereUniqueInput], {nullable:true})
    @Type(() => MoveMetaStatChangesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MoveMetaStatChangesWhereUniqueInput, 'move_id_stat_id'>>;

    @Field(() => [MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput], {nullable:true})
    @Type(() => MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput)
    update?: Array<MoveMetaStatChangesUpdateWithWhereUniqueWithoutStatInput>;

    @Field(() => [MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput], {nullable:true})
    @Type(() => MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput)
    updateMany?: Array<MoveMetaStatChangesUpdateManyWithWhereWithoutStatInput>;

    @Field(() => [MoveMetaStatChangesScalarWhereInput], {nullable:true})
    @Type(() => MoveMetaStatChangesScalarWhereInput)
    deleteMany?: Array<MoveMetaStatChangesScalarWhereInput>;
}
