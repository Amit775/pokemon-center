import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-generations/pokemon-form-generations-unchecked-update-many-without-pokemon-form-nested.input';
import { PokemonFormTypesUncheckedUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-types/pokemon-form-types-unchecked-update-many-without-pokemon-form-nested.input';

@InputType()
export class PokemonFormsUncheckedUpdateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => String, {nullable:true})
    form_identifier?: string;

    @Field(() => Int, {nullable:true})
    pokemon_id?: number;

    @Field(() => Int, {nullable:true})
    introduced_in_version_group_id?: number;

    @Field(() => Int, {nullable:true})
    is_default?: number;

    @Field(() => Int, {nullable:true})
    is_battle_only?: number;

    @Field(() => Int, {nullable:true})
    is_mega?: number;

    @Field(() => Int, {nullable:true})
    form_order?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    generations?: Identity<PokemonFormGenerationsUncheckedUpdateManyWithoutPokemonFormNestedInput>;

    @Field(() => PokemonFormTypesUncheckedUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    types?: Identity<PokemonFormTypesUncheckedUpdateManyWithoutPokemonFormNestedInput>;
}
