import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AbilitiesScalarWhereWithAggregatesInput {

    @Field(() => [AbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [AbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [AbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_main_series?: Identity<IntWithAggregatesFilter>;
}
