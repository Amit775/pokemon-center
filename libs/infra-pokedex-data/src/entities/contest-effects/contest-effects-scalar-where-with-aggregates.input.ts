import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    appeal?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    jam?: IntWithAggregatesFilter;
}
