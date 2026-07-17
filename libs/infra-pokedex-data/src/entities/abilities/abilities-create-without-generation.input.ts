import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesCreateNestedManyWithoutAbilityInput } from '../pokemon-abilities/pokemon-abilities-create-nested-many-without-ability.input';

@InputType()
export class AbilitiesCreateWithoutGenerationInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => PokemonAbilitiesCreateNestedManyWithoutAbilityInput, {nullable:true})
    pokemonAbilities?: Identity<PokemonAbilitiesCreateNestedManyWithoutAbilityInput>;
}
