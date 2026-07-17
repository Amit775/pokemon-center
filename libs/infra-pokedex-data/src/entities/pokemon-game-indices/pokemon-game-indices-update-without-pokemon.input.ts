import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput } from '../versions/versions-update-one-required-without-pokemon-game-indices-nested.input';

@InputType()
export class PokemonGameIndicesUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput, {nullable:true})
    version?: Identity<VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput>;
}
