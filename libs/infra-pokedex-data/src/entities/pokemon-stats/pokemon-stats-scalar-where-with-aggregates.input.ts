import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    pokemon_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    stat_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    base_stat?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    effort?: Identity<IntWithAggregatesFilter>;
}
