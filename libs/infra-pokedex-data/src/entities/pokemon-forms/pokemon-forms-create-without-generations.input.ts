import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutFormsInput } from '../pokemon/pokemon-create-nested-one-without-forms.input';
import { VersionGroupsCreateNestedOneWithoutPokemonFormsInput } from '../version-groups/version-groups-create-nested-one-without-pokemon-forms.input';
import { PokemonFormTypesCreateNestedManyWithoutPokemonFormInput } from '../pokemon-form-types/pokemon-form-types-create-nested-many-without-pokemon-form.input';

@InputType()
export class PokemonFormsCreateWithoutGenerationsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:true})
    form_identifier?: string;

    @Field(() => Int, {nullable:false})
    is_default!: number;

    @Field(() => Int, {nullable:false})
    is_battle_only!: number;

    @Field(() => Int, {nullable:false})
    is_mega!: number;

    @Field(() => Int, {nullable:false})
    form_order!: number;

    @Field(() => Int, {nullable:false})
    order!: number;

    @Field(() => PokemonCreateNestedOneWithoutFormsInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutFormsInput;

    @Field(() => VersionGroupsCreateNestedOneWithoutPokemonFormsInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutPokemonFormsInput;

    @Field(() => PokemonFormTypesCreateNestedManyWithoutPokemonFormInput, {nullable:true})
    types?: PokemonFormTypesCreateNestedManyWithoutPokemonFormInput;
}
