import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonFormsCreateNestedOneWithoutGenerationsInput } from '../pokemon-forms/pokemon-forms-create-nested-one-without-generations.input';

@InputType()
export class PokemonFormGenerationsCreateWithoutGenerationInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => PokemonFormsCreateNestedOneWithoutGenerationsInput, {nullable:false})
    pokemonForm!: PokemonFormsCreateNestedOneWithoutGenerationsInput;
}
