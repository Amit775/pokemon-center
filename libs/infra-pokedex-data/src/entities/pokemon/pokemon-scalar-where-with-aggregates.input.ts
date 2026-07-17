import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PokemonScalarWhereWithAggregatesInput {

    @Field(() => [PokemonScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: Identity<IntWithAggregatesFilter>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: Identity<StringWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    species_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    height?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    weight?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    base_experience?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_default?: Identity<IntWithAggregatesFilter>;
}
