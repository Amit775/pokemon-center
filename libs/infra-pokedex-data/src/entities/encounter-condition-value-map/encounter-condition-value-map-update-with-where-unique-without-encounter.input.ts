import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapUpdateWithoutEncounterInput } from './encounter-condition-value-map-update-without-encounter.input';

@InputType()
export class EncounterConditionValueMapUpdateWithWhereUniqueWithoutEncounterInput {

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;

    @Field(() => EncounterConditionValueMapUpdateWithoutEncounterInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUpdateWithoutEncounterInput)
    data!: EncounterConditionValueMapUpdateWithoutEncounterInput;
}
