import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ExperienceScalarWhereWithAggregatesInput {

    @Field(() => [ExperienceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ExperienceScalarWhereWithAggregatesInput>;

    @Field(() => [ExperienceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ExperienceScalarWhereWithAggregatesInput>;

    @Field(() => [ExperienceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ExperienceScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    growth_rate_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    level?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    experience?: Identity<IntWithAggregatesFilter>;
}
