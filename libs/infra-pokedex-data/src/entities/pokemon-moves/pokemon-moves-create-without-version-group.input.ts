import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonCreateNestedOneWithoutMovesInput } from '../pokemon/pokemon-create-nested-one-without-moves.input';
import { MovesCreateNestedOneWithoutPokemonMovesInput } from '../moves/moves-create-nested-one-without-pokemon-moves.input';
import { PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput } from '../pokemon-move-methods/pokemon-move-methods-create-nested-one-without-pokemon-moves.input';

@InputType()
export class PokemonMovesCreateWithoutVersionGroupInput {

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    mastery?: number;

    @Field(() => PokemonCreateNestedOneWithoutMovesInput, {nullable:false})
    pokemon!: Identity<PokemonCreateNestedOneWithoutMovesInput>;

    @Field(() => MovesCreateNestedOneWithoutPokemonMovesInput, {nullable:false})
    move!: Identity<MovesCreateNestedOneWithoutPokemonMovesInput>;

    @Field(() => PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput, {nullable:false})
    moveMethod!: Identity<PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput>;
}
