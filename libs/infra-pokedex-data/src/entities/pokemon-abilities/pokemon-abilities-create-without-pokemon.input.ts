import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput } from '../abilities/abilities-create-nested-one-without-pokemon-abilities.input';

@InputType()
export class PokemonAbilitiesCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    is_hidden!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput, {nullable:false})
    ability!: Identity<AbilitiesCreateNestedOneWithoutPokemonAbilitiesInput>;
}
