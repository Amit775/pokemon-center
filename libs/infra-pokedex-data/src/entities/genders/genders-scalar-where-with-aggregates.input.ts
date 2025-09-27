import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class GendersScalarWhereWithAggregatesInput {

    @Field(() => [GendersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GendersScalarWhereWithAggregatesInput>;

    @Field(() => [GendersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GendersScalarWhereWithAggregatesInput>;

    @Field(() => [GendersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GendersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
