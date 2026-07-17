import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput } from './pokemon-form-generations-pokemon-form-id-generation-id-compound-unique.input';
import { PokemonFormGenerationsWhereInput } from './pokemon-form-generations-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { PokemonFormsScalarRelationFilter } from '../pokemon-forms/pokemon-forms-scalar-relation-filter.input';
import { GenerationsScalarRelationFilter } from '../generations/generations-scalar-relation-filter.input';

@InputType()
export class PokemonFormGenerationsWhereUniqueInput {

    @Field(() => PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput, {nullable:true})
    pokemon_form_id_generation_id?: Identity<PokemonFormGenerationsPokemon_form_idGeneration_idCompoundUniqueInput>;

    @Field(() => [PokemonFormGenerationsWhereInput], {nullable:true})
    AND?: Array<PokemonFormGenerationsWhereInput>;

    @Field(() => [PokemonFormGenerationsWhereInput], {nullable:true})
    OR?: Array<PokemonFormGenerationsWhereInput>;

    @Field(() => [PokemonFormGenerationsWhereInput], {nullable:true})
    NOT?: Array<PokemonFormGenerationsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    pokemon_form_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;

    @Field(() => PokemonFormsScalarRelationFilter, {nullable:true})
    pokemonForm?: Identity<PokemonFormsScalarRelationFilter>;

    @Field(() => GenerationsScalarRelationFilter, {nullable:true})
    generation?: Identity<GenerationsScalarRelationFilter>;
}
