import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesUpdateManyWithoutMoveMethodNestedInput } from '../pokemon-moves/pokemon-moves-update-many-without-move-method-nested.input';

@InputType()
export class PokemonMoveMethodsUpdateWithoutVersionGroupsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonMovesUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUpdateManyWithoutMoveMethodNestedInput>;
}
