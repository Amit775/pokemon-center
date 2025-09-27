import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class SuperContestEffectsScalarWhereWithAggregatesInput {

    @Field(() => [SuperContestEffectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SuperContestEffectsScalarWhereWithAggregatesInput>;

    @Field(() => [SuperContestEffectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SuperContestEffectsScalarWhereWithAggregatesInput>;

    @Field(() => [SuperContestEffectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SuperContestEffectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    appeal?: IntWithAggregatesFilter;
}
