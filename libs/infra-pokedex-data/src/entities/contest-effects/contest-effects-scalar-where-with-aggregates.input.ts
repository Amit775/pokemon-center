import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ContestEffectsScalarWhereWithAggregatesInput {

    @Field(() => [ContestEffectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContestEffectsScalarWhereWithAggregatesInput>;

    @Field(() => [ContestEffectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContestEffectsScalarWhereWithAggregatesInput>;

    @Field(() => [ContestEffectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContestEffectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    appeal?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    jam?: Identity<IntWithAggregatesFilter>;
}
