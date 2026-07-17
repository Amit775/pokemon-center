import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput } from '../generations/generations-update-one-required-without-abilities-nested.input';
import { PokemonAbilitiesUpdateManyWithoutAbilityNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-ability-nested.input';

@InputType()
export class AbilitiesUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_main_series?: number;

    @Field(() => GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput, {nullable:true})
    generation?: Identity<GenerationsUpdateOneRequiredWithoutAbilitiesNestedInput>;

    @Field(() => PokemonAbilitiesUpdateManyWithoutAbilityNestedInput, {nullable:true})
    pokemonAbilities?: Identity<PokemonAbilitiesUpdateManyWithoutAbilityNestedInput>;
}
