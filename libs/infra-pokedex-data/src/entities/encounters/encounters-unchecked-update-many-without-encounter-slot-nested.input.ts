import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncountersCreateWithoutEncounterSlotInput } from './encounters-create-without-encounter-slot.input';
import { Type } from 'class-transformer';
import { EncountersCreateOrConnectWithoutEncounterSlotInput } from './encounters-create-or-connect-without-encounter-slot.input';
import { EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput } from './encounters-upsert-with-where-unique-without-encounter-slot.input';
import { EncountersCreateManyEncounterSlotInputEnvelope } from './encounters-create-many-encounter-slot-input-envelope.input';
import { Prisma } from '@prisma/client';
import { EncountersWhereUniqueInput } from './encounters-where-unique.input';
import { EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput } from './encounters-update-with-where-unique-without-encounter-slot.input';
import { EncountersUpdateManyWithWhereWithoutEncounterSlotInput } from './encounters-update-many-with-where-without-encounter-slot.input';
import { EncountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class EncountersUncheckedUpdateManyWithoutEncounterSlotNestedInput {

    @Field(() => [EncountersCreateWithoutEncounterSlotInput], {nullable:true})
    @Type(() => EncountersCreateWithoutEncounterSlotInput)
    create?: Array<EncountersCreateWithoutEncounterSlotInput>;

    @Field(() => [EncountersCreateOrConnectWithoutEncounterSlotInput], {nullable:true})
    @Type(() => EncountersCreateOrConnectWithoutEncounterSlotInput)
    connectOrCreate?: Array<EncountersCreateOrConnectWithoutEncounterSlotInput>;

    @Field(() => [EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput], {nullable:true})
    @Type(() => EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput)
    upsert?: Array<EncountersUpsertWithWhereUniqueWithoutEncounterSlotInput>;

    @Field(() => EncountersCreateManyEncounterSlotInputEnvelope, {nullable:true})
    @Type(() => EncountersCreateManyEncounterSlotInputEnvelope)
    createMany?: EncountersCreateManyEncounterSlotInputEnvelope;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    set?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersWhereUniqueInput], {nullable:true})
    @Type(() => EncountersWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<EncountersWhereUniqueInput, 'id'>>;

    @Field(() => [EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput], {nullable:true})
    @Type(() => EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput)
    update?: Array<EncountersUpdateWithWhereUniqueWithoutEncounterSlotInput>;

    @Field(() => [EncountersUpdateManyWithWhereWithoutEncounterSlotInput], {nullable:true})
    @Type(() => EncountersUpdateManyWithWhereWithoutEncounterSlotInput)
    updateMany?: Array<EncountersUpdateManyWithWhereWithoutEncounterSlotInput>;

    @Field(() => [EncountersScalarWhereInput], {nullable:true})
    @Type(() => EncountersScalarWhereInput)
    deleteMany?: Array<EncountersScalarWhereInput>;
}
