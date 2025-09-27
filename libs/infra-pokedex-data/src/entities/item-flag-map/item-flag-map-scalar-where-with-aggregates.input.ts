import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ItemFlagMapScalarWhereWithAggregatesInput {

    @Field(() => [ItemFlagMapScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemFlagMapScalarWhereWithAggregatesInput>;

    @Field(() => [ItemFlagMapScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemFlagMapScalarWhereWithAggregatesInput>;

    @Field(() => [ItemFlagMapScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemFlagMapScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_flag_id?: IntWithAggregatesFilter;
}
