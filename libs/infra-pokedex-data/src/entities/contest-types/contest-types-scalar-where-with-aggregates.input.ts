import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ContestTypesScalarWhereWithAggregatesInput {

    @Field(() => [ContestTypesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContestTypesScalarWhereWithAggregatesInput>;

    @Field(() => [ContestTypesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContestTypesScalarWhereWithAggregatesInput>;

    @Field(() => [ContestTypesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContestTypesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;
}
