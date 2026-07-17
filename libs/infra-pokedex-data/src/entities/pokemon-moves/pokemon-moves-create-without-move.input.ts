import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonCreateNestedOneWithoutMovesInput } from '../pokemon/pokemon-create-nested-one-without-moves.input';
import { VersionGroupsCreateNestedOneWithoutPokemonMovesInput } from '../version-groups/version-groups-create-nested-one-without-pokemon-moves.input';
import { PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput } from '../pokemon-move-methods/pokemon-move-methods-create-nested-one-without-pokemon-moves.input';

@InputType()
export class PokemonMovesCreateWithoutMoveInput {

    @Field(() => Int, {nullable:true})
    level?: number;

    @Field(() => Int, {nullable:true})
    order?: number;

    @Field(() => Int, {nullable:true})
    mastery?: number;

    @Field(() => PokemonCreateNestedOneWithoutMovesInput, {nullable:false})
    pokemon!: PokemonCreateNestedOneWithoutMovesInput;

    @Field(() => VersionGroupsCreateNestedOneWithoutPokemonMovesInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutPokemonMovesInput;

    @Field(() => PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput, {nullable:false})
    moveMethod!: PokemonMoveMethodsCreateNestedOneWithoutPokemonMovesInput;
}
