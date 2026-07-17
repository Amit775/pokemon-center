import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class EncounterConditionsScalarWhereWithAggregatesInput {

    @Field(() => [EncounterConditionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EncounterConditionsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterConditionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EncounterConditionsScalarWhereWithAggregatesInput>;

    @Field(() => [EncounterConditionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EncounterConditionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
