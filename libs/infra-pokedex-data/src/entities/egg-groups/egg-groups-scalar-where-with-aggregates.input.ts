import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class EggGroupsScalarWhereWithAggregatesInput {

    @Field(() => [EggGroupsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<EggGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [EggGroupsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<EggGroupsScalarWhereWithAggregatesInput>;

    @Field(() => [EggGroupsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<EggGroupsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
