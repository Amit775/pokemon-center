import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaStatChangesCreateWithoutMetaInput } from './move-meta-stat-changes-create-without-meta.input';
import { Type } from 'class-transformer';
import { MoveMetaStatChangesCreateOrConnectWithoutMetaInput } from './move-meta-stat-changes-create-or-connect-without-meta.input';
import { MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput } from './move-meta-stat-changes-upsert-with-where-unique-without-meta.input';
import { MoveMetaStatChangesCreateManyMetaInputEnvelope } from './move-meta-stat-changes-create-many-meta-input-envelope.input';
import { Prisma } from '@prisma/client';
import { MoveMetaStatChangesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput } from './move-meta-stat-changes-update-with-where-unique-without-meta.input';
import { MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput } from './move-meta-stat-changes-update-many-with-where-without-meta.input';
import { MoveMetaStatChangesScalarWhereInput } from './move-meta-stat-changes-scalar-where.input';

@InputType()
export class MoveMetaStatChangesUncheckedUpdateManyWithoutMetaNestedInput {

    @Field(() => [MoveMetaStatChangesCreateWithoutMetaInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateWithoutMetaInput)
    create?: Array<MoveMetaStatChangesCreateWithoutMetaInput>;

    @Field(() => [MoveMetaStatChangesCreateOrConnectWithoutMetaInput], {nullable:true})
    @Type(() => MoveMetaStatChangesCreateOrConnectWithoutMetaInput)
    connectOrCreate?: Array<MoveMetaStatChangesCreateOrConnectWithoutMetaInput>;

    @Field(() => [MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput], {nullable:true})
    @Type(() => MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput)
    upsert?: Array<MoveMetaStatChangesUpsertWithWhereUniqueWithoutMetaInput>;

    @Field(() => MoveMetaStatChangesCreateManyMetaInputEnvelope, {nullable:true})
    @Type(() => MoveMetaStatChangesCreateManyMetaInputEnvelope)
    createMany?: MoveMetaStatChangesCreateManyMetaInputEnvelope;

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

    @Field(() => [MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput], {nullable:true})
    @Type(() => MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput)
    update?: Array<MoveMetaStatChangesUpdateWithWhereUniqueWithoutMetaInput>;

    @Field(() => [MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput], {nullable:true})
    @Type(() => MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput)
    updateMany?: Array<MoveMetaStatChangesUpdateManyWithWhereWithoutMetaInput>;

    @Field(() => [MoveMetaStatChangesScalarWhereInput], {nullable:true})
    @Type(() => MoveMetaStatChangesScalarWhereInput)
    deleteMany?: Array<MoveMetaStatChangesScalarWhereInput>;
}
