import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutGameIndicesNestedInput } from '../pokemon/pokemon-update-one-required-without-game-indices-nested.input';
import { VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput } from '../versions/versions-update-one-required-without-pokemon-game-indices-nested.input';

@InputType()
export class PokemonGameIndicesUpdateInput {

    @Field(() => Int, {nullable:true})
    game_index?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutGameIndicesNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutGameIndicesNestedInput>;

    @Field(() => VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput, {nullable:true})
    version?: Identity<VersionsUpdateOneRequiredWithoutPokemonGameIndicesNestedInput>;
}
