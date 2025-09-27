import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class PokemonMovesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonMovesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonMovesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonMovesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonMovesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonMovesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonMovesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_group_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    move_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_move_method_id?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    level?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    order?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    mastery?: IntNullableWithAggregatesFilter;
}
