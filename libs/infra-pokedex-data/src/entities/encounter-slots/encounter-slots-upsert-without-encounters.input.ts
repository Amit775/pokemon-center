import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsUpdateWithoutEncountersInput } from './encounter-slots-update-without-encounters.input';
import { Type } from 'class-transformer';
import { EncounterSlotsCreateWithoutEncountersInput } from './encounter-slots-create-without-encounters.input';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';

@InputType()
export class EncounterSlotsUpsertWithoutEncountersInput {

    @Field(() => EncounterSlotsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateWithoutEncountersInput)
    update!: Identity<EncounterSlotsUpdateWithoutEncountersInput>;

    @Field(() => EncounterSlotsCreateWithoutEncountersInput, {nullable:false})
    @Type(() => EncounterSlotsCreateWithoutEncountersInput)
    create!: Identity<EncounterSlotsCreateWithoutEncountersInput>;

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: Identity<EncounterSlotsWhereInput>;
}
