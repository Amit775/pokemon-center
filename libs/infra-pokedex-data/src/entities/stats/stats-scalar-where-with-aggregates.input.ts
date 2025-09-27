import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
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
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    damage_class_id?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_battle_only?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    game_index?: IntNullableWithAggregatesFilter;
}
