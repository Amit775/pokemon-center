import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsCreateWithoutEncounterMethodInput } from './encounter-slots-create-without-encounter-method.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateOrConnectWithoutEncounterMethodInput } from './encounter-slots-create-or-connect-without-encounter-method.input';
import { EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput } from './encounter-slots-upsert-with-where-unique-without-encounter-method.input';
import { EncounterSlotsCreateManyEncounterMethodInputEnvelope } from './encounter-slots-create-many-encounter-method-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput } from './encounter-slots-update-with-where-unique-without-encounter-method.input';
import { EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput } from './encounter-slots-update-many-with-where-without-encounter-method.input';
import { EncounterSlotsScalarWhereInput } from './encounter-slots-scalar-where.input';

@InputType()
export class EncounterSlotsUncheckedUpdateManyWithoutEncounterMethodNestedInput {

    @Field(() => [EncounterSlotsCreateWithoutEncounterMethodInput], {nullable:true})
    @Type(() => EncounterSlotsCreateWithoutEncounterMethodInput)
    create?: Array<EncounterSlotsCreateWithoutEncounterMethodInput>;

    @Field(() => [EncounterSlotsCreateOrConnectWithoutEncounterMethodInput], {nullable:true})
    @Type(() => EncounterSlotsCreateOrConnectWithoutEncounterMethodInput)
    connectOrCreate?: Array<EncounterSlotsCreateOrConnectWithoutEncounterMethodInput>;

    @Field(() => [EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput], {nullable:true})
    @Type(() => EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput)
    upsert?: Array<EncounterSlotsUpsertWithWhereUniqueWithoutEncounterMethodInput>;

    @Field(() => EncounterSlotsCreateManyEncounterMethodInputEnvelope, {nullable:true})
    @Type(() => EncounterSlotsCreateManyEncounterMethodInputEnvelope)
    createMany?: EncounterSlotsCreateManyEncounterMethodInputEnvelope;

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

    @Field(() => [EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput], {nullable:true})
    @Type(() => EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput)
    update?: Array<EncounterSlotsUpdateWithWhereUniqueWithoutEncounterMethodInput>;

    @Field(() => [EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput], {nullable:true})
    @Type(() => EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput)
    updateMany?: Array<EncounterSlotsUpdateManyWithWhereWithoutEncounterMethodInput>;

    @Field(() => [EncounterSlotsScalarWhereInput], {nullable:true})
    @Type(() => EncounterSlotsScalarWhereInput)
    deleteMany?: Array<EncounterSlotsScalarWhereInput>;
}
