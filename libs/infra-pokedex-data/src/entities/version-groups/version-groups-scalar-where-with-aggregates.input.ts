import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: Identity<IntWithAggregatesFilter>;
}
