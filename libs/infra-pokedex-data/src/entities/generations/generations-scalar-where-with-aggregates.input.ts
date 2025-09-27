import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class GenerationsScalarWhereWithAggregatesInput {

    @Field(() => [GenerationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GenerationsScalarWhereWithAggregatesInput>;

    @Field(() => [GenerationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GenerationsScalarWhereWithAggregatesInput>;

    @Field(() => [GenerationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GenerationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    main_region_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
