import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class LanguagesScalarWhereWithAggregatesInput {

    @Field(() => [LanguagesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LanguagesScalarWhereWithAggregatesInput>;

    @Field(() => [LanguagesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LanguagesScalarWhereWithAggregatesInput>;

    @Field(() => [LanguagesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LanguagesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iso639?: Identity<StringWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iso3166?: Identity<StringWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    official?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: Identity<IntWithAggregatesFilter>;
}
