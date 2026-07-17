import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-update-many-without-move-method-nested.input';

@InputType()
export class PokemonMoveMethodsUpdateWithoutPokemonMovesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    identifier?: string;

    @Field(() => VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput, {nullable:true})
    versionGroups?: Identity<VersionGroupPokemonMoveMethodsUpdateManyWithoutMoveMethodNestedInput>;
}
