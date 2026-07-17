import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EncounterSlotsCreateWithoutEncountersInput } from './encounter-slots-create-without-encounters.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateOrConnectWithoutEncountersInput } from './encounter-slots-create-or-connect-without-encounters.input';
import { EncounterSlotsUpsertWithoutEncountersInput } from './encounter-slots-upsert-without-encounters.input';
import { Prisma } from '@prisma/client';
import { EncounterSlotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { EncounterSlotsUpdateToOneWithWhereWithoutEncountersInput } from './encounter-slots-update-to-one-with-where-without-encounters.input';

@InputType()
export class EncounterSlotsUpdateOneRequiredWithoutEncountersNestedInput {

    @Field(() => EncounterSlotsCreateWithoutEncountersInput, {nullable:true})
    @Type(() => EncounterSlotsCreateWithoutEncountersInput)
    create?: EncounterSlotsCreateWithoutEncountersInput;

    @Field(() => EncounterSlotsCreateOrConnectWithoutEncountersInput, {nullable:true})
    @Type(() => EncounterSlotsCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: EncounterSlotsCreateOrConnectWithoutEncountersInput;

    @Field(() => EncounterSlotsUpsertWithoutEncountersInput, {nullable:true})
    @Type(() => EncounterSlotsUpsertWithoutEncountersInput)
    upsert?: EncounterSlotsUpsertWithoutEncountersInput;

    @Field(() => EncounterSlotsWhereUniqueInput, {nullable:true})
    @Type(() => EncounterSlotsWhereUniqueInput)
    connect?: Prisma.AtLeast<EncounterSlotsWhereUniqueInput, 'id'>;

    @Field(() => EncounterSlotsUpdateToOneWithWhereWithoutEncountersInput, {nullable:true})
    @Type(() => EncounterSlotsUpdateToOneWithWhereWithoutEncountersInput)
    update?: EncounterSlotsUpdateToOneWithWhereWithoutEncountersInput;
}
