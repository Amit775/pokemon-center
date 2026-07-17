import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class SuperContestCombosScalarWhereWithAggregatesInput {

    @Field(() => [SuperContestCombosScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SuperContestCombosScalarWhereWithAggregatesInput>;

    @Field(() => [SuperContestCombosScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SuperContestCombosScalarWhereWithAggregatesInput>;

    @Field(() => [SuperContestCombosScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SuperContestCombosScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    first_move_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    second_move_id?: Identity<IntWithAggregatesFilter>;
}
