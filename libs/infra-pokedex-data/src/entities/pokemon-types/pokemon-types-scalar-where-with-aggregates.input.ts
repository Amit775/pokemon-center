import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    type_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: IntWithAggregatesFilter;
}
