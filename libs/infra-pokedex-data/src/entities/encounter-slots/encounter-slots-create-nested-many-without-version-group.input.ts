import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsCreateWithoutVersionGroupInput } from './encounter-slots-create-without-version-group.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateOrConnectWithoutVersionGroupInput } from './encounter-slots-create-or-connect-without-version-group.input';
import type { Identity } from 'identity-type';
import { EncounterSlotsCreateManyVersionGroupInputEnvelope } from './encounter-slots-create-many-version-group-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';

@InputType()
export class EncounterSlotsCreateNestedManyWithoutVersionGroupInput {

    @Field(() => [EncounterSlotsCreateWithoutVersionGroupInput], {nullable:true})
    @Type(() => EncounterSlotsCreateWithoutVersionGroupInput)
    create?: Array<EncounterSlotsCreateWithoutVersionGroupInput>;

    @Field(() => [EncounterSlotsCreateOrConnectWithoutVersionGroupInput], {nullable:true})
    @Type(() => EncounterSlotsCreateOrConnectWithoutVersionGroupInput)
    connectOrCreate?: Array<EncounterSlotsCreateOrConnectWithoutVersionGroupInput>;

    @Field(() => EncounterSlotsCreateManyVersionGroupInputEnvelope, {nullable:true})
    @Type(() => EncounterSlotsCreateManyVersionGroupInputEnvelope)
    createMany?: Identity<EncounterSlotsCreateManyVersionGroupInputEnvelope>;

    @Field(() => [EncounterSlotsWhereUniqueInput], {nullable:true})
    @Type(() => EncounterSlotsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>>;
}
