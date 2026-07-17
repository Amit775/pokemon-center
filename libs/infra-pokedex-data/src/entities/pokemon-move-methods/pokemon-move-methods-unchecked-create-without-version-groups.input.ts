import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PokemonMovesUncheckedCreateNestedManyWithoutMoveMethodInput } from '../pokemon-moves/pokemon-moves-unchecked-create-nested-many-without-move-method.input';

@InputType()
export class PokemonMoveMethodsUncheckedCreateWithoutVersionGroupsInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonMovesUncheckedCreateNestedManyWithoutMoveMethodInput, {nullable:true})
    pokemonMoves?: PokemonMovesUncheckedCreateNestedManyWithoutMoveMethodInput;
}
