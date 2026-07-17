import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonMovesCreateNestedManyWithoutMoveMethodInput } from '../pokemon-moves/pokemon-moves-create-nested-many-without-move-method.input';

@InputType()
export class PokemonMoveMethodsCreateWithoutVersionGroupsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonMovesCreateNestedManyWithoutMoveMethodInput, {nullable:true})
    pokemonMoves?: PokemonMovesCreateNestedManyWithoutMoveMethodInput;
}
