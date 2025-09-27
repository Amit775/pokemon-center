import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ItemFlingEffectsScalarWhereWithAggregatesInput {

    @Field(() => [ItemFlingEffectsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemFlingEffectsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemFlingEffectsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemFlingEffectsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemFlingEffectsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemFlingEffectsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
