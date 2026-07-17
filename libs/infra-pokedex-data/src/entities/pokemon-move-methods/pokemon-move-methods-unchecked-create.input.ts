import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonMovesUncheckedCreateNestedManyWithoutMoveMethodInput } from '../pokemon-moves/pokemon-moves-unchecked-create-nested-many-without-move-method.input';
import { VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutMoveMethodInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-create-nested-many-without-move-method.input';

@InputType()
export class PokemonMoveMethodsUncheckedCreateInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => PokemonMovesUncheckedCreateNestedManyWithoutMoveMethodInput, {nullable:true})
    pokemonMoves?: Identity<PokemonMovesUncheckedCreateNestedManyWithoutMoveMethodInput>;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutMoveMethodInput, {nullable:true})
    versionGroups?: Identity<VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutMoveMethodInput>;
}
