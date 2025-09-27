import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonStatsScalarWhereWithAggregatesInput {

    @Field(() => [PokemonStatsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonStatsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonStatsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonStatsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonStatsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonStatsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    base_stat?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    effort?: IntWithAggregatesFilter;
}
