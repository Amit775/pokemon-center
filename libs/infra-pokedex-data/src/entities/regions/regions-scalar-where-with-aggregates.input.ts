import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class RegionsScalarWhereWithAggregatesInput {

    @Field(() => [RegionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RegionsScalarWhereWithAggregatesInput>;

    @Field(() => [RegionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RegionsScalarWhereWithAggregatesInput>;

    @Field(() => [RegionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RegionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
