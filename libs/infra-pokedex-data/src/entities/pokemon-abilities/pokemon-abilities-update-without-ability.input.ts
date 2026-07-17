import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutAbilitiesNestedInput } from '../pokemon/pokemon-update-one-required-without-abilities-nested.input';

@InputType()
export class PokemonAbilitiesUpdateWithoutAbilityInput {

    @Field(() => Int, {nullable:true})
    is_hidden?: number;

    @Field(() => Int, {nullable:true})
    slot?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutAbilitiesNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutAbilitiesNestedInput>;
}
