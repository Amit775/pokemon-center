import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput } from '../version-groups/version-groups-update-one-required-without-pokemon-moves-nested.input';
import { MovesUpdateOneRequiredWithoutPokemonMovesNestedInput } from '../moves/moves-update-one-required-without-pokemon-moves-nested.input';
import { PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-pokemon-moves-nested.input';

@InputType()
export class PokemonMovesUpdateWithoutPokemonInput {

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    mastery?: number;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput>;

    @Field(() => MovesUpdateOneRequiredWithoutPokemonMovesNestedInput, {nullable:true})
    move?: Identity<MovesUpdateOneRequiredWithoutPokemonMovesNestedInput>;

    @Field(() => PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput, {nullable:true})
    moveMethod?: Identity<PokemonMoveMethodsUpdateOneRequiredWithoutPokemonMovesNestedInput>;
}
