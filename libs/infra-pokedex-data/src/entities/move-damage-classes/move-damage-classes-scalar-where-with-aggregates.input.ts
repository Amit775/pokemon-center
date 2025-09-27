import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class MoveDamageClassesScalarWhereWithAggregatesInput {

    @Field(() => [MoveDamageClassesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MoveDamageClassesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveDamageClassesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MoveDamageClassesScalarWhereWithAggregatesInput>;

    @Field(() => [MoveDamageClassesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MoveDamageClassesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
