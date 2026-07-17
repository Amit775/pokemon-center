import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutAbilitiesInput } from '../pokemon/pokemon-create-nested-one-without-abilities.input';
import { AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput } from '../abilities/abilities-create-nested-one-without-pokemon-abilities.input';

@InputType()
export class PokemonAbilitiesCreateInput {

    @Field(() => Int, {nullable:false})
    is_hidden!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonCreateNestedOneWithoutAbilitiesInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutAbilitiesInput;

    @Field(() => AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput, {nullable:false})
    ability!: AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput;
}
