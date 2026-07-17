import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput } from '../generations/generations-create-nested-one-without-pokemon-form-generations.input';

@InputType()
export class PokemonFormGenerationsCreateWithoutPokemonFormInput {

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput, {nullable:false})
    generation!: GenerationsCreateNestedOneWithoutPokemonFormGenerationsInput;
}
