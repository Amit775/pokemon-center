import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class PokemonAbilitiesScalarWhereWithAggregatesInput {

    @Field(() => [PokemonAbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PokemonAbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonAbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PokemonAbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => [PokemonAbilitiesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PokemonAbilitiesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    pokemon_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    ability_id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    is_hidden?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    slot?: IntWithAggregatesFilter;
}
