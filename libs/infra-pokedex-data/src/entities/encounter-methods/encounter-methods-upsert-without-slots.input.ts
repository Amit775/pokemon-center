import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { EncounterMethodsUpdateWithoutSlotsInput } from './encounter-methods-update-without-slots.input';
import { Type } from 'class-transformer';
import { EncounterMethodsCreateWithoutSlotsInput } from './encounter-methods-create-without-slots.input';
import { EncounterMethodsWhereInput } from './encounter-methods-where.input';

@InputType()
export class EncounterMethodsUpsertWithoutSlotsInput {

    @Field(() => EncounterMethodsUpdateWithoutSlotsInput, {nullable:false})
    @Type(() => EncounterMethodsUpdateWithoutSlotsInput)
    update!: Identity<EncounterMethodsUpdateWithoutSlotsInput>;

    @Field(() => EncounterMethodsCreateWithoutSlotsInput, {nullable:false})
    @Type(() => EncounterMethodsCreateWithoutSlotsInput)
    create!: Identity<EncounterMethodsCreateWithoutSlotsInput>;

    @Field(() => EncounterMethodsWhereInput, {nullable:true})
    @Type(() => EncounterMethodsWhereInput)
    where?: Identity<EncounterMethodsWhereInput>;
}
