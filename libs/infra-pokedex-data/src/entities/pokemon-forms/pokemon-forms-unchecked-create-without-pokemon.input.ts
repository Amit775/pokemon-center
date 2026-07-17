import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonFormGenerationsUncheckedCreateNestedManyWithoutPokemonFormInput } from '../pokemon-form-generations/pokemon-form-generations-unchecked-create-nested-many-without-pokemon-form.input';
import { PokemonFormTypesUncheckedCreateNestedManyWithoutPokemonFormInput } from '../pokemon-form-types/pokemon-form-types-unchecked-create-nested-many-without-pokemon-form.input';

@InputType()
export class PokemonFormsUncheckedCreateWithoutPokemonInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => String, {nullable:true})
    form_identifier?: string;

    @Field(() => Int, {nullable:false})
    introduced_in_version_group_id!: number;

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

    @Field(() => PokemonFormGenerationsUncheckedCreateNestedManyWithoutPokemonFormInput, {nullable:true})
    generations?: Identity<PokemonFormGenerationsUncheckedCreateNestedManyWithoutPokemonFormInput>;

    @Field(() => PokemonFormTypesUncheckedCreateNestedManyWithoutPokemonFormInput, {nullable:true})
    types?: Identity<PokemonFormTypesUncheckedCreateNestedManyWithoutPokemonFormInput>;
}
