import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class PokemonShapesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonShapesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonShapesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonShapesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonShapesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonShapesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonShapesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    identifier?: StringWithAggregatesFilter;
}
