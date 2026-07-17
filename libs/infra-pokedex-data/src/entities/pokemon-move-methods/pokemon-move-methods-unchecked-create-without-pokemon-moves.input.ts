import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutMoveMethodInput } from '../version-group-pokemon-move-methods/version-group-pokemon-move-methods-unchecked-create-nested-many-without-move-method.input';

@InputType()
export class PokemonMoveMethodsUncheckedCreateWithoutPokemonMovesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutMoveMethodInput, {nullable:true})
    versionGroups?: Identity<VersionGroupPokemonMoveMethodsUncheckedCreateNestedManyWithoutMoveMethodInput>;
}
