import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput } from '../pokemon-abilities/pokemon-abilities-unchecked-update-many-without-ability-nested.input';

@InputType()
export class AbilitiesUncheckedUpdateWithoutGenerationInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => Int, {nullable:true})
    is_main_series?: number;

    @Field(() => PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput, {nullable:true})
    pokemonAbilities?: Identity<PokemonAbilitiesUncheckedUpdateManyWithoutAbilityNestedInput>;
}
