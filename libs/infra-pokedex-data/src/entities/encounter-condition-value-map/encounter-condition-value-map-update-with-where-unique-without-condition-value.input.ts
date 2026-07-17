import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import { EncounterConditionValueMapUpdateWithoutConditionValueInput } from './encounter-condition-value-map-update-without-condition-value.input';

@InputType()
export class EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput {

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;

    @Field(() => EncounterConditionValueMapUpdateWithoutConditionValueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUpdateWithoutConditionValueInput)
    data!: EncounterConditionValueMapUpdateWithoutConditionValueInput;
}
