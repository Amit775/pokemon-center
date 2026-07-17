import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsCreateWithoutEncounterMethodInput } from './encounter-slots-create-without-encounter-method.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateOrConnectWithoutEncounterMethodInput } from './encounter-slots-create-or-connect-without-encounter-method.input';
import type { Identity } from 'identity-type';
import { EncounterSlotsCreateManyEncounterMethodInputEnvelope } from './encounter-slots-create-many-encounter-method-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';

@InputType()
export class EncounterSlotsUncheckedCreateNestedManyWithoutEncounterMethodInput {

    @Field(() => [EncounterSlotsCreateWithoutEncounterMethodInput], {nullable:true})
    @Type(() => EncounterSlotsCreateWithoutEncounterMethodInput)
    create?: Array<EncounterSlotsCreateWithoutEncounterMethodInput>;

    @Field(() => [EncounterSlotsCreateOrConnectWithoutEncounterMethodInput], {nullable:true})
    @Type(() => EncounterSlotsCreateOrConnectWithoutEncounterMethodInput)
    connectOrCreate?: Array<EncounterSlotsCreateOrConnectWithoutEncounterMethodInput>;

    @Field(() => EncounterSlotsCreateManyEncounterMethodInputEnvelope, {nullable:true})
    @Type(() => EncounterSlotsCreateManyEncounterMethodInputEnvelope)
    createMany?: Identity<EncounterSlotsCreateManyEncounterMethodInputEnvelope>;

    @Field(() => [EncounterSlotsWhereUniqueInput], {nullable:true})
    @Type(() => EncounterSlotsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>>;
}
