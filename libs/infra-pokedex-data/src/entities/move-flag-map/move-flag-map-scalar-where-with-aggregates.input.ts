import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MoveFlagMapScalarWhereWithAggregatesInput {

    @Field(() => [MoveFlagMapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveFlagMapScalarWhereWithAggregatesInput>;

    @Field(() => [MoveFlagMapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveFlagMapScalarWhereWithAggregatesInput>;

    @Field(() => [MoveFlagMapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveFlagMapScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_flag_id?: Identity<IntWithAggregatesFilter>;
}
