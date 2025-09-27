import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ContestCombosScalarWhereWithAggregatesInput {

    @Field(() => [ContestCombosScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContestCombosScalarWhereWithAggregatesInput>;

    @Field(() => [ContestCombosScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContestCombosScalarWhereWithAggregatesInput>;

    @Field(() => [ContestCombosScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContestCombosScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    first_move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    second_move_id?: IntWithAggregatesFilter;
}
