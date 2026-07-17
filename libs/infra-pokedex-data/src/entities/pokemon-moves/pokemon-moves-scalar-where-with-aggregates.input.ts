import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonMovesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonMovesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonMovesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonMovesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonMovesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonMovesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonMovesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_move_method_id?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    level?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: Identity<IntWithAggregatesFilter>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    mastery?: Identity<IntWithAggregatesFilter>;
}
