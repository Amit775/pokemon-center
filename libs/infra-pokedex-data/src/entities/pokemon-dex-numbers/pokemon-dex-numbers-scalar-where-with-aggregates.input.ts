import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonDexNumbersScalarWhereWithAggregatesInput {

    @Field(() => [PokemonDexNumbersScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonDexNumbersScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonDexNumbersScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonDexNumbersScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonDexNumbersScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonDexNumbersScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    species_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokedex_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokedex_number?: IntWithAggregatesFilter;
}
