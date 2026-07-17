import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutEncounterSlotInput } from './encounters-create-without-encounter-slot.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutEncounterSlotInput } from './encounters-create-or-connect-without-encounter-slot.input';
import { EncountersCreateManyEncounterSlotInputEnvelope } from './encounters-create-many-encounter-slot-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class EncountersCreateNestedManyWithoutEncounterSlotInput {

    @Field(() => [EncountersCreateWithoutEncounterSlotInput], {nullable:true})
    @Type(() => EncountersCreateWithoutEncounterSlotInput)
    create?: Array<EncountersCreateWithoutEncounterSlotInput>;

    @Field(() => [EncountersCreateOrConnectWithoutEncounterSlotInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutEncounterSlotInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutEncounterSlotInput>;

    @Field(() => EncountersCreateManyEncounterSlotInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyEncounterSlotInputEnvelope)
    createMany?: EncountersCreateManyEncounterSlotInputEnvelope;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;
}
