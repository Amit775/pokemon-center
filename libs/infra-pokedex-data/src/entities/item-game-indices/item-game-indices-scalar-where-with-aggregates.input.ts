import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class ItemGameIndicesScalarWhereWithAggregatesInput {

    @Field(() => [ItemGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [ItemGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [ItemGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}
