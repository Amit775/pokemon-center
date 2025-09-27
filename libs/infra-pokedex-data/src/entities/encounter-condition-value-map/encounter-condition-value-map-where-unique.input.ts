import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValueMapWhereInput } from './encounter-condition-value-map-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EncountersScalarRelationFilter } from '../encounters/encounters-scalar-relation-filter.input';
import { EncounterConditionValuesScalarRelationFilter } from '../encounter-condition-values/encounter-condition-values-scalar-relation-filter.input';

@InputType()
export class EncounterConditionValueMapWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    encounter_id?: number;

    @Field(() => [EncounterConditionValueMapWhereInput], {nullable:true})
    AND?: Array<EncounterConditionValueMapWhereInput>;

    @Field(() => [EncounterConditionValueMapWhereInput], {nullable:true})
    OR?: Array<EncounterConditionValueMapWhereInput>;

    @Field(() => [EncounterConditionValueMapWhereInput], {nullable:true})
    NOT?: Array<EncounterConditionValueMapWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_value_id?: IntFilter;

    @Field(() => EncountersScalarRelationFilter, {nullable:true})
    encounter?: EncountersScalarRelationFilter;

    @Field(() => EncounterConditionValuesScalarRelationFilter, {nullable:true})
    conditionValue?: EncounterConditionValuesScalarRelationFilter;
}
