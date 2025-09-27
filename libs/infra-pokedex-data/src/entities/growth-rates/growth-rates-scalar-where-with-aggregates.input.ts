import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class GrowthRatesScalarWhereWithAggregatesInput {

    @Field(() => [GrowthRatesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GrowthRatesScalarWhereWithAggregatesInput>;

    @Field(() => [GrowthRatesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GrowthRatesScalarWhereWithAggregatesInput>;

    @Field(() => [GrowthRatesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GrowthRatesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    formula?: StringWithAggregatesFilter;
}
