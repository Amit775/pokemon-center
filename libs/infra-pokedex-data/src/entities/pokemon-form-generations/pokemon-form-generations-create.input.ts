import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormsCreateNestedOneWithoutGenerationsInput } from '../pokemon-forms/pokemon-forms-create-nested-one-without-generations.input';
import { GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput } from '../generations/generations-create-nested-one-without-pokemon-form-generations.input';

@InputType()
export class PokemonFormGenerationsCreateInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => PokemonFormsCreateNestedOneWithoutGenerationsInput, {nullable:false})
    pokemonForm!: Identity<PokemonFormsCreateNestedOneWithoutGenerationsInput>;

    @Field(() => GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput, {nullable:false})
    generation!: Identity<GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput>;
}
