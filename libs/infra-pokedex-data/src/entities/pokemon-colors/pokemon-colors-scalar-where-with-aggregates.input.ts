import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PokemonColorsScalarWhereWithAggregatesInput {

    @Field(() => [PokemonColorsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonColorsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonColorsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonColorsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonColorsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonColorsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
