import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutFormsNestedInput } from '../pokemon/pokemon-update-one-required-without-forms-nested.input';
import { VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput } from '../version-groups/version-groups-update-one-required-without-pokemon-forms-nested.input';
import { PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput } from '../pokemon-form-types/pokemon-form-types-update-many-without-pokemon-form-nested.input';

@InputType()
export class PokemonFormsUpdateWithoutGenerationsInput {

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

    @Field(() => PokemonUpdateOneRequiredWithoutFormsNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutFormsNestedInput>;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutPokemonFormsNestedInput>;

    @Field(() => PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput, {nullable:true})
    types?: Identity<PokemonFormTypesUpdateManyWithoutPokemonFormNestedInput>;
}
