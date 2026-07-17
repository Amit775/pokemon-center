import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesUpdateManyWithoutAbilityNestedInput } from '../pokemon-abilities/pokemon-abilities-update-many-without-ability-nested.input';

@InputType()
export class AbilitiesUpdateWithoutGenerationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_main_series?: number;

    @Field(() => PokemonAbilitiesUpdateManyWithoutAbilityNestedInput, {nullable:true})
    pokemonAbilities?: Identity<PokemonAbilitiesUpdateManyWithoutAbilityNestedInput>;
}
