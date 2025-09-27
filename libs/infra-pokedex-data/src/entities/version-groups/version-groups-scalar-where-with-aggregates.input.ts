import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class VersionGroupsScalarWhereWithAggregatesInput {

    @Field(() => [VersionGroupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VersionGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionGroupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VersionGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionGroupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VersionGroupsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;
}
