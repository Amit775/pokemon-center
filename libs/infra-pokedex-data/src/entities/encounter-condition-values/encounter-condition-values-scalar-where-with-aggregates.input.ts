import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class EncounterConditionValuesScalarWhereWithAggregatesInput {

    @Field(() => [EncounterConditionValuesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EncounterConditionValuesScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterConditionValuesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EncounterConditionValuesScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterConditionValuesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EncounterConditionValuesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_condition_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_default?: Identity<IntWithAggregatesFilter>;
}
