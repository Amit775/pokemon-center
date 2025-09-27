import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MoveFlagsScalarWhereWithAggregatesInput {

    @Field(() => [MoveFlagsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveFlagsScalarWhereWithAggregatesInput>;

    @Field(() => [MoveFlagsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveFlagsScalarWhereWithAggregatesInput>;

    @Field(() => [MoveFlagsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveFlagsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
