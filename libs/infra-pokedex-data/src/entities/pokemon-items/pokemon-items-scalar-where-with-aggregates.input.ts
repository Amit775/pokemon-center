import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonItemsScalarWhereWithAggregatesInput {

    @Field(() => [PokemonItemsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonItemsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonItemsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonItemsScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonItemsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonItemsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    version_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    item_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rarity?: IntWithAggregatesFilter;
}
