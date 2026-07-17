import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class EncounterConditionValueMapScalarWhereWithAggregatesInput {

    @Field(() => [EncounterConditionValueMapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EncounterConditionValueMapScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterConditionValueMapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EncounterConditionValueMapScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterConditionValueMapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EncounterConditionValueMapScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    encounter_condition_value_id?: Identity<IntWithAggregatesFilter>;
}
