import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonFormTypesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonFormTypesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonFormTypesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonFormTypesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonFormTypesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonFormTypesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonFormTypesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_form_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    type_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: Identity<IntWithAggregatesFilter>;
}
