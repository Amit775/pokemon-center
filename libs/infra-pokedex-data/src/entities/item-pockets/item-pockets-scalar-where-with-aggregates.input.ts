import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ItemPocketsScalarWhereWithAggregatesInput {

    @Field(() => [ItemPocketsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ItemPocketsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemPocketsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ItemPocketsScalarWhereWithAggregatesInput>;

    @Field(() => [ItemPocketsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ItemPocketsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
