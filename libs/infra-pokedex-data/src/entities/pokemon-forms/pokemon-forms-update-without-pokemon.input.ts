import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput } from '../version-groups/version-groups-update-one-required-without-pokemon-forms-nested.input';
import { PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-generations/pokemon-form-generations-update-many-without-pokemon-form-nested.input';
import { PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-types/pokemon-form-types-update-many-without-pokemon-form-nested.input';

@InputType()
export class PokemonFormsUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => String, {nullable:true})
    form_identifier?: string;

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

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput>;

    @Field(() => PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    generations?: Identity<PokemonFormGenerationsUpdateManyWithoutPokemonFormNestedInput>;

    @Field(() => PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    types?: Identity<PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput>;
}
