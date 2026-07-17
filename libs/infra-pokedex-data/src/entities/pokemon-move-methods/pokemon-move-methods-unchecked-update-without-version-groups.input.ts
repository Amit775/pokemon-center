import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesUncheckedUpdateManyWithoutMoveMethodNestedInput } from '../pokemon-moves/pokemon-moves-unchecked-update-many-without-move-method-nested.input';

@InputType()
export class PokemonMoveMethodsUncheckedUpdateWithoutVersionGroupsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => PokemonMovesUncheckedUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUncheckedUpdateManyWithoutMoveMethodNestedInput>;
}
