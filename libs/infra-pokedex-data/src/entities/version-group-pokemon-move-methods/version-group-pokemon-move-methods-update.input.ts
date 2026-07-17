import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput } from '../version-groups/version-groups-update-one-required-without-version-group-pokemon-move-methods-nested.input';
import { PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput } from '../pokemon-move-methods/pokemon-move-methods-update-one-required-without-version-groups-nested.input';

@InputType()
export class VersionGroupPokemonMoveMethodsUpdateInput {

    @Field(() => VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput, {nullable:true})
    versionGroup?: VersionGroupsUpdateOneRequiredWithoutVersionGroupPokemonMoveMethodsNestedInput;

    @Field(() => PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput, {nullable:true})
    moveMethod?: PokemonMoveMethodsUpdateOneRequiredWithoutVersionGroupsNestedInput;
}
