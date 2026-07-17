import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonTypesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonTypesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonTypesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonTypesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonTypesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonTypesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonTypesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    type_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: Identity<IntWithAggregatesFilter>;
}
