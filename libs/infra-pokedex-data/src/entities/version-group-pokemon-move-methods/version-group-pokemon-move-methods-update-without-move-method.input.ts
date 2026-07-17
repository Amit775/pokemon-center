import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-pokemon-move-methods-nested.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateWithoutMoveMethodInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput;
}
