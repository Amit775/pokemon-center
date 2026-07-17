import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class VersionsScalarWhereWithAggregatesInput {

    @Field(() => [VersionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VersionsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VersionsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VersionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
