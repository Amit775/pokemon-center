import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsCreateWithoutVersionGroupInput } from './encounter-slots-create-without-version-group.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateOrConnectWithoutVersionGroupInput } from './encounter-slots-create-or-connect-without-version-group.input';
import { EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput } from './encounter-slots-upsert-with-where-unique-without-version-group.input';
import { EncounterSlotsCreateManyVersionGroupInputEnvelope } from './encounter-slots-create-many-version-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput } from './encounter-slots-update-with-where-unique-without-version-group.input';
import { EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput } from './encounter-slots-update-many-with-where-without-version-group.input';
import { EncounterSlotsScalarWhereInput } from './encounter-slots-scalar-where.input';

@InputType()
export class EncounterSlotsUpdateManyWithoutVersionGroupNestedInput {

    @Field(() => [EncounterSlotsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => EncounterSlotsCreateWithoutVersionGroupInput)
    create?: Array<EncounterSlotsCreateWithoutVersionGroupInput>;

    @Field(() => [EncounterSlotsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => EncounterSlotsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<EncounterSlotsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => [EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput)
    upsert?: Array<EncounterSlotsUpsertWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => EncounterSlotsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => EncounterSlotsCreateManyVersionGroupInputEnvelope)
    createMany?: EncounterSlotsCreateManyVersionGroupInputEnvelope;

    @Field(() => [EncounterSlotsWhereUniqueInput], {nullable:true})
    @Type(() => EncounterSlotsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterSlotsWhereUniqueInput], {nullable:true})
    @Type(() => EncounterSlotsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterSlotsWhereUniqueInput], {nullable:true})
    @Type(() => EncounterSlotsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterSlotsWhereUniqueInput], {nullable:true})
    @Type(() => EncounterSlotsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>>;

    @Field(() => [EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput], {nullable:true})
    @Type(() => EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput)
    update?: Array<EncounterSlotsUpdateWithWhereUniqueWithoutVersionGroupInput>;

    @Field(() => [EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput], {nullable:true})
    @Type(() => EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput)
    updateMany?: Array<EncounterSlotsUpdateManyWithWhereWithoutVersionGroupInput>;

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    @Type(() => EncounterSlotsScalarWhereInput)
    deleteMany?: Array<EncounterSlotsScalarWhereInput>;
}
