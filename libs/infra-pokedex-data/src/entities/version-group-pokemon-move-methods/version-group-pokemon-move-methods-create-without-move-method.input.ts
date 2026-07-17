import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput } from '../version-groups/version-groups-create-nested-one-without-version-group-pokemon-move-methods.input';

@InputType()
export class VersionGroupPokemonMoveMethodsCreateWithoutMoveMethodInput {

    @Field(() => VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput, {nullable:false})
    versionGroup!: VersionGroupsCreateNestedOneWithoutVersionGroupPokemonMoveMethodsInput;
}
