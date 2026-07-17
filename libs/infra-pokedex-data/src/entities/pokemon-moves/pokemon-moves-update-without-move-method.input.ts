import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonUpdateOneRequiredWithoutMovesNestedInput } from '../pokemon/pokemon-update-one-required-without-moves-nested.input';
import { VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput } from '../version-groups/version-groups-update-one-required-without-pokemon-moves-nested.input';
import { MovesUpdateOneRequiredWithoutPokemonMovesNestedInput } from '../moves/moves-update-one-required-without-pokemon-moves-nested.input';

@InputType()
export class PokemonMovesUpdateWithoutMoveMethodInput {

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    mastery?: number;

    @Field(() => PokemonUpdateOneRequiredWithoutMovesNestedInput, {nullable:true})
    pokemon?: Identity<PokemonUpdateOneRequiredWithoutMovesNestedInput>;

    @Field(() => VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput, {nullable:true})
    versionGroup?: Identity<VersionGroupsUpdateOneRequiredWithoutPokemonMovesNestedInput>;

    @Field(() => MovesUpdateOneRequiredWithoutPokemonMovesNestedInput, {nullable:true})
    move?: Identity<MovesUpdateOneRequiredWithoutPokemonMovesNestedInput>;
}
