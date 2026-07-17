import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput } from '../abilities/abilities-update-one-required-without-pokemon-abilities-nested.input';

@InputType()
export class PokemonAbilitiesUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    is_hidden?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput, {nullable:true})
    ability?: Identity<AbilitiesUpdateOneRequiredWithoutPokemonAbilitiesNestedInput>;
}
