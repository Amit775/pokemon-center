import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class VersionGroupRegionsScalarWhereWithAggregatesInput {

    @Field(() => [VersionGroupRegionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<VersionGroupRegionsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionGroupRegionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<VersionGroupRegionsScalarWhereWithAggregatesInput>;

    @Field(() => [VersionGroupRegionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<VersionGroupRegionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    region_id?: IntWithAggregatesFilter;
}
