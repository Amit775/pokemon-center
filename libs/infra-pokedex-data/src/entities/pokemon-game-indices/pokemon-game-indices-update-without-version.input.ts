import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutGameIndicesNestedInput } from '../pokemon/pokemon-update-one-required-without-game-indices-nested.input';

@InputType()
export class PokemonGameIndicesUpdateWithoutVersionInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutGameIndicesNestedInput>;
}
