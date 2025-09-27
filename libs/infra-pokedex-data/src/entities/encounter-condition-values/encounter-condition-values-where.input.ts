import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EncounterConditionsScalarRelationFilter } from '../encounter-conditions/encounter-conditions-scalar-relation-filter.input';
import { EncounterConditionValueMapListRelationFilter } from '../encounter-condition-value-map/encounter-condition-value-map-list-relation-filter.input';

@InputType()
export class EncounterConditionValuesWhereInput {

    @Field(() => [EncounterConditionValuesWhereInput], {nullable:true})
    AND?: Array<EncounterConditionValuesWhereInput>;

    @Field(() => [EncounterConditionValuesWhereInput], {nullable:true})
    OR?: Array<EncounterConditionValuesWhereInput>;

    @Field(() => [EncounterConditionValuesWhereInput], {nullable:true})
    NOT?: Array<EncounterConditionValuesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    encounter_condition_id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    identifier?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    is_default?: IntFilter;

    @Field(() => EncounterConditionsScalarRelationFilter, {nullable:true})
    condition?: EncounterConditionsScalarRelationFilter;

    @Field(() => EncounterConditionValueMapListRelationFilter, {nullable:true})
    conditionValueMap?: EncounterConditionValueMapListRelationFilter;
}
