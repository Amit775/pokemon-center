import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ItemFlagsScalarWhereWithAggregatesInput {

    @Field(() => [ItemFlagsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemFlagsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemFlagsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemFlagsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemFlagsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemFlagsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
