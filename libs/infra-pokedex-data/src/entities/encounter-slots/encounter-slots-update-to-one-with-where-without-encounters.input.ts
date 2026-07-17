import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterSlotsWhereInput } from './encounter-slots-where.input';
import { Type } from 'class-transformer';
import { EncounterSlotsUpdateWithoutEncountersInput } from './encounter-slots-update-without-encounters.input';

@InputType()
export class EncounterSlotsUpdateToOneWithWhereWithoutEncountersInput {

    @Field(() => EncounterSlotsWhereInput, {nullable:true})
    @Type(() => EncounterSlotsWhereInput)
    where?: Identity<EncounterSlotsWhereInput>;

    @Field(() => EncounterSlotsUpdateWithoutEncountersInput, {nullable:false})
    @Type(() => EncounterSlotsUpdateWithoutEncountersInput)
    data!: Identity<EncounterSlotsUpdateWithoutEncountersInput>;
}
