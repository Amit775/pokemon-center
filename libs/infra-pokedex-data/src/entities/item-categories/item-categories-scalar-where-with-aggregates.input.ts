import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ItemCategoriesScalarWhereWithAggregatesInput {

    @Field(() => [ItemCategoriesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemCategoriesScalarWhereWithAggregatesInput>;

    @Field(() => [ItemCategoriesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemCategoriesScalarWhereWithAggregatesInput>;

    @Field(() => [ItemCategoriesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemCategoriesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pocket_id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
