import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateNestedOneWithoutAbilitiesInput } from '../pokemon/pokemon-create-nested-one-without-abilities.input';

@InputType()
export class PokemonAbilitiesCreateWithoutAbilityInput {

    @Field(() => Int, {nullable:false})
    is_hidden!: number;

    @Field(() => Int, {nullable:false})
    slot!: number;

    @Field(() => PokemonCreateNestedOneWithoutAbilitiesInput, {nullable:false})
    pokemon!: Identity<PokemonCreateNestedOneWithoutAbilitiesInput>;
}
