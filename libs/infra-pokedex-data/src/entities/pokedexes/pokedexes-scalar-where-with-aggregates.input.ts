import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
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
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    region_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_main_series?: Identity<IntWithAggregatesFilter>;
}
