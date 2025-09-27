import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iso639?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iso3166?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    official?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;
}
