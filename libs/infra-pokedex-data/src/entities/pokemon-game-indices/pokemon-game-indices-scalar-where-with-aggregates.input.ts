import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonGameIndicesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonGameIndicesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonGameIndicesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    game_index?: Identity<IntWithAggregatesFilter>;
}
