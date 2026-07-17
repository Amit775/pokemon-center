import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    item_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_flag_id?: Identity<IntWithAggregatesFilter>;
}
