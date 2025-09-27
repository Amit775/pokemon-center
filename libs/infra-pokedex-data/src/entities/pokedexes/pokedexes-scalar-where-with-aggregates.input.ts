import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PokedexesScalarWhereWithAggregatesInput {

    @Field(() => [PokedexesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokedexesScalarWhereWithAggregatesInput>;

    @Field(() => [PokedexesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokedexesScalarWhereWithAggregatesInput>;

    @Field(() => [PokedexesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokedexesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    region_id?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_main_series?: IntWithAggregatesFilter;
}
