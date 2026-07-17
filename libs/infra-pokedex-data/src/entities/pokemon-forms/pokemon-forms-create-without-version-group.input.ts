import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateNestedOneWithoutFormsInput } from '../pokemon/pokemon-create-nested-one-without-forms.input';
import { PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput } from '../pokemon-form-generations/pokemon-form-generations-create-nested-many-without-pokemon-form.input';
import { PokemonFormTypesCreateNestedManyWithoutPokemonFormInput } from '../pokemon-form-types/pokemon-form-types-create-nested-many-without-pokemon-form.input';

@InputType()
export class PokemonFormsCreateWithoutVersionGroupInput {

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
    pokemon!: Identity<PokemonCreateNestedOneWithoutFormsInput>;

    @Field(() => PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput, {nullable:true})
    generations?: Identity<PokemonFormGenerationsCreateNestedManyWithoutPokemonFormInput>;

    @Field(() => PokemonFormTypesCreateNestedManyWithoutPokemonFormInput, {nullable:true})
    types?: Identity<PokemonFormTypesCreateNestedManyWithoutPokemonFormInput>;
}
