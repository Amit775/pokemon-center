import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class StatsScalarWhereWithAggregatesInput {

    @Field(() => [StatsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StatsScalarWhereWithAggregatesInput>;

    @Field(() => [StatsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StatsScalarWhereWithAggregatesInput>;

    @Field(() => [StatsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StatsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    damage_class_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_battle_only?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: Identity<IntWithAggregatesFilter>;
}
