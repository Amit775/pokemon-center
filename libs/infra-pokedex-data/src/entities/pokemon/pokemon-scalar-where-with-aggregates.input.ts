import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class PokemonScalarWhereWithAggregatesInput {

    @Field(() => [PokemonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    species_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    height?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    weight?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    base_experience?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    order?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_default?: IntWithAggregatesFilter;
}
