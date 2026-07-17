import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonAbilitiesUncheckedCreateNestedManyWithoutAbilityInput } from '../pokemon-abilities/pokemon-abilities-unchecked-create-nested-many-without-ability.input';

@InputType()
export class AbilitiesUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    generation_id!: number;

    @Field(() => Int, {nullable:false})
    is_main_series!: number;

    @Field(() => PokemonAbilitiesUncheckedCreateNestedManyWithoutAbilityInput, {nullable:true})
    pokemonAbilities?: Identity<PokemonAbilitiesUncheckedCreateNestedManyWithoutAbilityInput>;
}
