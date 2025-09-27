import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonFormGenerationsScalarWhereWithAggregatesInput {

    @Field(() => [PokemonFormGenerationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonFormGenerationsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonFormGenerationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonFormGenerationsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonFormGenerationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonFormGenerationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_form_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    generation_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: IntWithAggregatesFilter;
}
