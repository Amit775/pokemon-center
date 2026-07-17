import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput } from '../version-groups/version-groups-create-nested-one-without-version-group-pokemon-move-methods.input';
import { PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput } from '../pokemon-move-methods/pokemon-move-methods-create-nested-one-without-version-groups.input';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateInput {

    @Field(() => VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput, {nullable:false})
    versionGroup!: Identity<VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput>;

    @Field(() => PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput, {nullable:false})
    moveMethod!: Identity<PokemonMoveMethodsCreateNestedOneWithoutVersionGroupsInput>;
}
