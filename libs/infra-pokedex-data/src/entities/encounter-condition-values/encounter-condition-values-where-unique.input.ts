import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { EncounterConditionValuesWhereInput } from './encounter-condition-values-where.input';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EncounterConditionsScalarRelationFilter } from '../encounter-conditions/encounter-conditions-scalar-relation-filter.input';
import { EncounterConditionValueMapListRelationFilter } from '../encounter-condition-value-map/encounter-condition-value-map-list-relation-filter.input';

@InputType()
export class EncounterConditionValuesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [EncounterConditionValuesWhereInput], {nullable:true})
    AND?: Array<EncounterConditionValuesWhereInput>;

    @Field(() => [EncounterConditionValuesWhereInput], {nullable:true})
    OR?: Array<EncounterConditionValuesWhereInput>;

    @Field(() => [EncounterConditionValuesWhereInput], {nullable:true})
    NOT?: Array<EncounterConditionValuesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;

    @Field(() => IntFilter, {nullable:true})
    is_default?: Identity<IntFilter>;

    @Field(() => EncounterConditionsScalarRelationFilter, {nullable:true})
    condition?: Identity<EncounterConditionsScalarRelationFilter>;

    @Field(() => EncounterConditionValueMapListRelationFilter, {nullable:true})
    conditionValueMap?: Identity<EncounterConditionValueMapListRelationFilter>;
}
