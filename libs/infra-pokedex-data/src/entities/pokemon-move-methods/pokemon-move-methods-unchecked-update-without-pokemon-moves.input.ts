import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-update-many-without-move-method-nested.input';

@InputType()
export class PokemonMoveMethodsUncheckedUpdateWithoutPokemonMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupPokemonMoveMethodsUncheckedUpdateManyWithoutMoveMethodNestedInput>;
}
