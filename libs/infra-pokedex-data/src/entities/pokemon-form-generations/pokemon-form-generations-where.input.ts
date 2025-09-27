import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonFormsScalarRelationFilter } from '../pokemon-forms/pokemon-forms-scalar-relation-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';

@InputType()
export class PokemonFormGenerationsWhereInput {

    @Field(() => [PokemonFormGenerationsWhereInput], {nullable:true})
    AND?: Array<PokemonFormGenerationsWhereInput>;

    @Field(() => [PokemonFormGenerationsWhereInput], {nullable:true})
    OR?: Array<PokemonFormGenerationsWhereInput>;

    @Field(() => [PokemonFormGenerationsWhereInput], {nullable:true})
    NOT?: Array<PokemonFormGenerationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;

    @Field(() => PokemonFormsScalarRelationFilter, {nullable:true})
    pokemonForm?: PokemonFormsScalarRelationFilter;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: GenerationsScalarRelationFilter;
}
