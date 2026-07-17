import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapCreateWithoutEncounterInput } from './encounter-condition-value-map-create-without-encounter.input';

@InputType()
export class EncounterConditionValueMapCreateOrConnectWithoutEncounterInput {

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;

    @Field(() => EncounterConditionValueMapCreateWithoutEncounterInput, {nullable:false})
    @Type(() => EncounterConditionValueMapCreateWithoutEncounterInput)
    create!: Identity<EncounterConditionValueMapCreateWithoutEncounterInput>;
}
