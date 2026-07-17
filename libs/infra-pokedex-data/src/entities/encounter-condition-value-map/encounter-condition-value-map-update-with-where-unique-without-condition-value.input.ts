import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { EncounterConditionValueMapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { EncounterConditionValueMapUpdateWithoutConditionValueInput } from './encounter-condition-value-map-update-without-condition-value.input';

@InputType()
export class EncounterConditionValueMapUpdateWithWhereUniqueWithoutConditionValueInput {

    @Field(() => EncounterConditionValueMapWhereUniqueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapWhereUniqueInput)
    where!: Prisma.AtLeast<EncounterConditionValueMapWhereUniqueInput, 'encounter_id'>;

    @Field(() => EncounterConditionValueMapUpdateWithoutConditionValueInput, {nullable:false})
    @Type(() => EncounterConditionValueMapUpdateWithoutConditionValueInput)
    data!: Identity<EncounterConditionValueMapUpdateWithoutConditionValueInput>;
}
