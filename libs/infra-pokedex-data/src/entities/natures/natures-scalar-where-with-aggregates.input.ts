import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class NaturesScalarWhereWithAggregatesInput {

    @Field(() => [NaturesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NaturesScalarWhereWithAggregatesInput>;

    @Field(() => [NaturesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NaturesScalarWhereWithAggregatesInput>;

    @Field(() => [NaturesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NaturesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    decreased_stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    increased_stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    hates_flavor_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    likes_flavor_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}
